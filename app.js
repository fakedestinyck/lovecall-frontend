/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
(function(document, window, undefined) {
  'use strict';

  // rhythm
  var offsetMs = 2199;
  var beatMs = 346.820809248555;
  var tempoFactory = function(beatMs, offsetMs) {
    // TODO: 4/4 time signature assumed
    var measureMs = beatMs * 4;
    var fourthBeatMs = beatMs / 4;

    return {
      timeToBeat: function(posMs) {
        var posAfterOffset = posMs - offsetMs;
        var tmp = posAfterOffset / measureMs;
        var measure = Math.floor(tmp);
        var fourthBeat = Math.floor((posAfterOffset - measure * measureMs) / fourthBeatMs);
        return [measure, fourthBeat];
      },
      beatToTime: function(measure, fourthBeat) {
        return offsetMs + measure * measureMs + fourthBeat * fourthBeatMs;
      }
    };
  };

  var snowhareTempo = tempoFactory(beatMs, offsetMs);

  // DOM
  var sourceElement = document.getElementById('music-source');
  // var offsetElement = document.getElementById('offset');
  var measureElement = document.getElementById('measure');
  var beatElement = document.getElementById('beat');
  var beatIndicatorElements = document.querySelectorAll('.beat-indicator');

  // audio
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var sourceNode = audioCtx.createMediaElementSource(sourceElement);
  var timingNode = audioCtx.createScriptProcessor(1024);

  var isPlaying = false;
  var ctxLastReferenceMs = 0;
  var playbackReferenceMs = 0;
  var playbackPosMs = 0;
  var playbackPosMeasure = 0;
  var playbackPosBeat = 0;
  var prevFrameMeasure = 0;
  var prevFrameBeat = 0;

  var playEventHandlerFactory = function(newState) {
    return function(e) {
      isPlaying = newState;

      if (newState) {
        ctxLastReferenceMs = audioCtx.currentTime * 1000;
        playbackReferenceMs = sourceElement.currentTime * 1000;
        sourceNode.connect(timingNode);
        timingNode.connect(audioCtx.destination);
      } else {
        sourceNode.disconnect(timingNode);
        timingNode.disconnect(audioCtx.destination);
      }
    };
  };

  sourceElement.addEventListener('play', playEventHandlerFactory(true));
  sourceElement.addEventListener('playing', playEventHandlerFactory(true));
  sourceElement.addEventListener('pause', playEventHandlerFactory(false));

  var audioCallback = function(e) {
    var ctxMs = e.playbackTime * 1000;
    var posMs = playbackReferenceMs + ctxMs - ctxLastReferenceMs;
    var currentBeat = snowhareTempo.timeToBeat(posMs);
    var newMeasure = currentBeat[0];
    var newBeat = currentBeat[1];

    playbackPosMs = posMs;
    playbackPosMeasure = newMeasure;
    playbackPosBeat = newBeat;

    // just pass through
    var inBuf = e.inputBuffer;
    var outBuf = e.outputBuffer;
    var ch;
    for (ch = 0; ch < inBuf.numberOfChannels; ch++) {
      var data = inBuf.getChannelData(ch);
      outBuf.copyToChannel(data, ch);
    }
  };

  timingNode.addEventListener('audioprocess', audioCallback);

  var prevBeatIndicatorIdx = 0;

  var frameCallback = function(ts) {
    window.requestAnimationFrame(frameCallback);

    // offsetElement.innerHTML = '' + Math.floor(playbackPosMs)
    // + ' ' + Math.floor(playbackReferenceMs)
    // + ' ' + Math.floor(ctxLastReferenceMs);

    if (prevFrameMeasure != playbackPosMeasure) {
      measureElement.innerHTML = '' + playbackPosMeasure;
      prevFrameMeasure = playbackPosMeasure;
    }

    if (prevFrameBeat != playbackPosBeat) {
      beatElement.innerHTML = '' + playbackPosBeat;

      // beat indicator
      var idx = Math.floor(playbackPosBeat / 4);
      beatIndicatorElements[prevBeatIndicatorIdx].classList.remove('active');
      beatIndicatorElements[idx].classList.add('active');
      prevBeatIndicatorIdx = idx;

      prevFrameBeat = playbackPosBeat;
    }
  };

  var beatAdd = function(one, other) {
    var newMeasure = one[0] + other[0];
    var newBeat = one[1] + other[1];
    newMeasure += Math.floor(newBeat / 16);
    return [newMeasure, newBeat % 16];
  };

  var beatCompare = function(one, other) {
    return (one[0] * 16 + one[1]) - (other[0] * 16 + other[1]);
  };

  var makeEngineEvent = function(a, tempo) {
    return {
      "ts": tempo.beatToTime(a[0][0], a[0][1]),
      "type": a[1],
      "params": a[2]
    };
  };

  var parseFuFuAction = function(startBeat, params) {
    return [
      [startBeat, "Fu!", null],
      [beatAdd(startBeat, [0, 2]), "Fu!", null]
    ];
  };

  var parsePeriodicAction = function(startBeat, endBeat, type, offset, increment) {
    var result = [];
    var currentBeat = beatAdd(startBeat, offset);

    while (beatCompare(currentBeat, endBeat) < 0) {
      result.push([currentBeat, type, null]);
      currentBeat = beatAdd(currentBeat, increment);
    }

    return result;
  };

  var parseSJAction = function(startBeat, endBeat, params) {
    return parsePeriodicAction(startBeat, endBeat, "上举", [0, 0], [0, params[0]]);
  };

  var parseLDAction = function(startBeat, endBeat, params) {
    return parsePeriodicAction(startBeat, endBeat, "里打", [0, 4], [0, 8]);
  };

  var parseLTAction = function(startBeat, endBeat, params) {
    return parsePeriodicAction(startBeat, endBeat, "里跳", [0, 4], [0, 8]);
  };

  var parseKHAction = function(startBeat, endBeat, params) {
    return parsePeriodicAction(startBeat, endBeat, "快挥", [0, 0], [0, 4]);
  }

  var parseAlarmAction = function(startBeat, endBeat, params) {
    return [
      [startBeat, "Hi!", null],
      [beatAdd(startBeat, [0, 8]), "Hi!", null],
      [beatAdd(startBeat, [1, 0]), "Hi!", null],
      [beatAdd(startBeat, [1, 4]), "Hi!", null],
      [beatAdd(startBeat, [1, 8]), "Hi!", null],
      [beatAdd(startBeat, [1, 12]), "Hi!", null]
    ];
  };

  var parsePPPHAction = function(startBeat, endBeat, params) {
    var ppphVariant = params[0];
    var currentBeat = startBeat;
    var result = [];

    switch(ppphVariant) {
      case 'OOOH': {
        while (beatCompare(currentBeat, endBeat) < 0) {
          result.push([currentBeat, "Oh~", null]);
          result.push([beatAdd(currentBeat, [0, 12]), "Hi!", null]);
          currentBeat = beatAdd(currentBeat, [1, 0]);
        }

        break;
      }

      default:
        console.error('unrecognized PPPH parameter', params);
    }

    return result;
  };

  var parseFollowAction = function(startBeat, endBeat, params) {
    var content = params[0];

    return [
      [startBeat, "跟唱", content]
    ];
  };

  var POINT_ACTION_PARSERS = {
    'fufu': parseFuFuAction
  };

  var LONG_ACTION_PARSERS = {
    '上举': parseSJAction,
    '里打': parseLDAction,
    '警报': parseAlarmAction,
    'PPPH': parsePPPHAction,
    '里跳': parseLTAction,
    '快挥': parseKHAction,
    '跟唱': parseFollowAction
  };

  var parsePointAction = function(actionData) {
    var actionStartBeat = actionData.slice(0, 2);
    var actionType = actionData[2];
    var actionParams = actionData.slice(3);

    var parseFn = POINT_ACTION_PARSERS[actionType];
    if (parseFn) {
      return parseFn(actionStartBeat, actionParams);
    }

    console.error('unrecognized point action', actionData);
    return [];
  };

  var parseLongAction = function(actionData) {
    var actionStartBeat = actionData.slice(0, 2);
    var actionEndBeat = actionData.slice(2, 4);
    var actionType = actionData[4];
    var actionParams = actionData.slice(5);

    var parseFn = LONG_ACTION_PARSERS[actionType];
    if (parseFn) {
      return parseFn(actionStartBeat, actionEndBeat, actionParams);
    }

    console.error('unrecognized long action', actionData);
    return [];
  };

  var parseTimelineAction = function(action) {
    var actionFlag = action[0];
    var actionData = action.slice(1);
    switch (actionFlag) {
      case 0:
        return parsePointAction(actionData);
      case 1:
        return parseLongAction(actionData);
    }

    console.error('unrecognized action', action);
    return [];
  };

  var parseTimeline = function(timeline, tempo) {
    var events = timeline.map(function(v) {
      return parseTimelineAction(v, tempo);
    });

    var result = events.reduce(function(acc, elem) {
      var i = 0;
      for (; i < elem.length; i++) {
        acc.push(makeEngineEvent(elem[i], tempo));
      }

      return acc;
    }, []);

    result.sort(function(a, b) {
      return a.ts - b.ts;
    });
    return result;
  };

  var parseCall = function(data) {
    var sources = data.metadata.song.sources;
    var offsetMs = sources[Object.keys(sources)[0]].offset +
                 data.metadata.song.timing[0][0];
    var beatMs = 60000 / data.metadata.song.timing[0][1];
    var tempo = tempoFactory(beatMs, offsetMs);

    var events = parseTimeline(data.timeline, tempo);

    // TODO
    return events;
  };

  console.log(parseCall(CALL_DATA));

  window.requestAnimationFrame(frameCallback);
})(document, window);
/* @license-end */


// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:

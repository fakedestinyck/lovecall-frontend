/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
'use strict';

require('angular');
var tempoMod = require('../choreography/tempo');

require('../ui/frame');


var mod = angular.module('lovecall/engine/audio', []);

mod.factory('AudioEngine', function($window, $log, FrameManager) {
  var audioCtx = new ($window.AudioContext || $window.webkitAudioContext)();

  var sourceBuffer = null;
  var sourceNode = null;
  var timingNode = audioCtx.createScriptProcessor(2048);

  var isPlaying = false;
  var ctxLastReferenceMs = 0;
  var playbackReferenceMs = 0;
  var playbackPosMs = 0;
  
  $log = $log.getInstance('AudioEngine');


  var onEndedCallback = function(e) {
    pause();
  };


  // interface
  var resume = function() {
    isPlaying = true;

    if (playbackPosMs >= getDuration()) {
      // rewind
      playbackPosMs = 0;
    }

    ctxLastReferenceMs = audioCtx.currentTime * 1000;
    playbackReferenceMs = playbackPosMs;

    $log.info(
        'resume: ctxLastReferenceMs=',
        ctxLastReferenceMs,
        'playbackPosMs=',
        playbackPosMs
        );

    sourceNode = audioCtx.createBufferSource();
    sourceNode.buffer = sourceBuffer;
    sourceNode.onended = onEndedCallback;

    sourceNode.connect(timingNode);
    timingNode.connect(audioCtx.destination);

    sourceNode.start(0, playbackPosMs / 1000);
  };


  var pause = function() {
    isPlaying = false;

    $log.info('pause');

    sourceNode.stop();

    sourceNode.disconnect(timingNode);
    timingNode.disconnect(audioCtx.destination);
  };


  var seek = function(newPositionMs) {
    sourceNode.onended = function(e) {
      playbackPosMs = newPositionMs;
      resume();
    };

    pause();
  };


  var getIsPlaying = function() {
    return isPlaying;
  };

  var getDuration = function() {
    return sourceBuffer.duration * 1000;
  };


  var getPlaybackPosition = function() {
    return playbackPosMs;
  };


  var setSourceData = function(data) {
    $log.debug('setSourceData: data=', data);

    // audioCtx.decodeAudioData(data).then(finishSetSourceData);
    audioCtx.decodeAudioData(data, finishSetSourceData);
  };


  var finishSetSourceData = function(buffer) {
    $log.debug('finishSetSourceData: buffer=', buffer);

    sourceBuffer = buffer;
    playbackPosMs = 0;
  };


  var audioCallbackFactory = function(tempo) {
    var metronome = tempoMod.metronomeFactory(tempo, FrameManager.tickCallback);

    var audioCallback = function(e) {
      var ctxMs = e.playbackTime * 1000;
      var posMs = playbackReferenceMs + ctxMs - ctxLastReferenceMs;
      playbackPosMs = posMs;

      metronome.tick(posMs);

      // just pass through
      var inBuf = e.inputBuffer;
      var outBuf = e.outputBuffer;
      var ch;
      for (ch = 0; ch < inBuf.numberOfChannels; ch++) {
        var data = inBuf.getChannelData(ch);
        if (outBuf.copyToChannel) {
          outBuf.copyToChannel(data, ch);
        } else {
          outBuf.getChannelData(ch).set(data);
        }
      }
    };

    return audioCallback;
  };


  var setTempo = function(tempo) {
    $log.debug('setTempo: tempo=', tempo);

    var audioCallback = audioCallbackFactory(tempo);
    timingNode.onaudioprocess = audioCallback;
  };


  return {
    'getIsPlaying': getIsPlaying,
    'getDuration': getDuration,
    'getPlaybackPosition': getPlaybackPosition,
    'setSourceData': setSourceData,
    'setTempo': setTempo,
    'resume': resume,
    'pause': pause,
    'seek': seek
  };
});
/* @license-end */

// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:

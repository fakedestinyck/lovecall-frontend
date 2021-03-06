module.exports = {
  "lovecall": 0,
  "metadata": {
    "song": {
      "title": "Wonderful Rush",
      "artist": "μ's",
      "album": "Wonderful Rush",
      "lang": "ja",
      "remoteBasename": "wr",
      "sources": {
        "fallback:": {
          "offset": 6345
        },
        "md5:4133e7e877d5c29b6269dd6ef67e20ae": {
          "offset": 6345
        }
      },
      "timing": [
        [0, 169.0, 4, 4, 0]
      ]
    },
    "palette": [
      "#eeeeee",
      "#ff0000",
      "#ff0099"
    ]
  },
  "form": [
    [0, 0, 8, 0, "I"],
    [8, 0, 12, 0, "G0"],
    [12, 0, 28, 0, "A1"],
    [28, 0, 38, 0, "B1"],
    [38, 0, 54, 0, "C1"],
    [54, 0, 66, 0, "G1"],
    [66, 0, 78, 0, "A2"],
    [78, 0, 86, 0, "G2"],
    [86, 0, 96, 0, "B2"],
    [96, 0, 112, 0, "C2"],
    [116, 0, 120, 0, "S1"],
    [120, 0, 124, 0, "S2"],
    [124, 0, 132, 0, "G3"],
    [132, 0, 144, 0, "S3"],
    [144, 0, 160, 0, "C3"],
    [160, 0, 176, 0, "C4"],
    [176, 0, 187, 12, "G4"],
    [187, 12, -1, -1, "O"]
  ],
  "colors": [
    [-2, -2, 116, 0, -1],
    [116, 0, 120, 0, 1],
    [120, 0, 124, 0, 2],
    [124, 0, 132, 0, -1],
    [132, 0, 144, 0, 0],
    [144, 0, -1, -1, -1]
  ],
  "sequences": {
    "快挥-fufu-fuwafuwa": [
      [1, 0, 0, 1, 8, "快挥"],
      [0, 1, 10, "fufu"],
      [1, 2, 0, 3, 0, "快挥"],
      [1, 3, 0, 4, 0, "fuwa"]
    ],
    "dan-da-dan-dan": [
      [1, 0, 0, 0, 3, "快挥"],
      [1, 0, 3, 0, 4, "快挥"],
      [1, 0, 4, 0, 12, "快挥"],
      [1, 0, 0, 0, 3, "跟唱", "Dan"],
      [1, 0, 3, 0, 4, "跟唱", "da"],
      [1, 0, 4, 0, 8, "跟唱", "Dan"],
      [1, 0, 8, 0, 12, "跟唱", "Dan!"]
    ],
    "wr-chorus": [
      [2, 0, 0, "快挥-fufu-fuwafuwa"],
      [1, 4, 0, 8, 0, "快挥"],
      [2, 8, 0, "快挥-fufu-fuwafuwa"],
      [1, 12, 0, 15, 0, "快挥"]
    ],
    "hihi-susume": [
      [1, 0, 0, 1, 0, "快挥", 4],
      [1, 0, 0, 0, 4, "跟唱", "Hi"],
      [1, 0, 4, 0, 8, "跟唱", "Hi"],
      [1, 0, 8, 0, 12, "跟唱", "ス", "Su"],
      [1, 0, 10, 0, 12, "跟唱", "ス", "su"],
      [1, 0, 12, 1, 0, "跟唱", "メ", "me"]
    ],
    "hihi-super-jump": [
      [1, 0, 0, 1, 0, "快挥", 4],
      [1, 0, 2, 0, 4, "跟唱", "Hi"],
      [1, 0, 4, 0, 6, "跟唱", "Hi"],
      [1, 0, 8, 0, 11, "跟唱", "Su"],
      [1, 0, 11, 0, 14, "跟唱", "per"],
      [1, 0, 14, 1, 0, "跟唱", "Jump"],
    ],
    "ohyeah-super-jump": [
      [1, 0, 0, 1, 0, "快挥", 4],
      [1, 0, 2, 0, 4, "跟唱", "Oh"],
      [1, 0, 4, 0, 6, "跟唱", "Yeah"],
      [1, 0, 8, 0, 11, "跟唱", "Su"],
      [1, 0, 11, 0, 14, "跟唱", "per"],
      [1, 0, 14, 1, 0, "跟唱", "Jump"],
    ],
    "hihi-susumuyo": [
      [1, 0, 0, 1, 0, "快挥", 4],
      [1, 0, 0, 0, 4, "跟唱", "Hi"],
      [1, 0, 4, 0, 8, "跟唱", "Hi"],
      [1, 0, 8, 0, 10, "跟唱", "ス", "Su"],
      [1, 0, 10, 0, 12, "跟唱", "ス", "su"],
      [1, 0, 12, 0, 14, "跟唱", "ム", "mu"],
      [1, 0, 14, 1, 0, "跟唱", "ヨ", "yo"]
    ],
    "lets-go": [
      [1, 0, 0, 0, 2, "跟唱", "Let's"],
      [1, 0, 2, 0, 6, "跟唱", "go"]
    ],
    "madamada": [
      [1, 0, 0, 0, 2, "跟唱", "ま", "Ma"],
      [1, 0, 2, 0, 4, "跟唱", "だ", "da"],
      [1, 0, 4, 0, 6, "跟唱", "ま", "ma"],
      [1, 0, 6, 0, 8, "跟唱", "だ", "da"],
    ],
    "hihi-susume-madamada-lets-go": [
      [2, 0, 0, "hihi-susume"],
      [1, 1, 0, 2, 0, "快挥", 4],
      [2, 1, 0, "madamada"],
      [2, 1, 10, "lets-go"]
    ],
    "hihi-susume-horahora-lets-go": [
      [2, 0, 0, "hihi-susume"],
      [1, 1, 0, 2, 0, "快挥", 4],
      [1, 1, 0, 1, 2, "跟唱", "ほ", "Ho"],
      [1, 1, 2, 1, 4, "跟唱", "ら", "ra"],
      [1, 1, 4, 1, 6, "跟唱", "ほ", "ho"],
      [1, 1, 6, 1, 8, "跟唱", "ら", "ra"],
      [2, 1, 10, "lets-go"]
    ],
    "shinpai-iranai": [
      [1, 0, 0, 0, 4, "跟唱", "心", "Shin"],
      [1, 0, 4, 0, 8, "跟唱", "配", "pai"],
      [1, 0, 8, 0, 10, "跟唱", "い", "i"],
      [1, 0, 10, 0, 12, "跟唱", "ら", "ra"],
      [1, 0, 12, 1, 0, "跟唱", "ない", "nai"]
    ],
    "shinpai-iranai-2": [
      [1, 0, 0, 0, 4, "跟唱", "心", "Shin"],
      [1, 0, 4, 0, 8, "跟唱", "配", "pai"],
      [1, 0, 8, 0, 10, "跟唱", "い", "i"],
      [1, 0, 10, 0, 12, "跟唱", "ら", "ra"],
      [1, 0, 12, 0, 14, "跟唱", "な", "na"],
      [1, 0, 14, 1, 0, "跟唱", "い", "i"]
    ],
    "all-right": [
      [1, 0, 0, 0, 2, "跟唱", "All"],
      [1, 0, 2, 0, 6, "跟唱", "right"]
    ],
    "wr-follow-ending": [
      [2, 0, 0, "hihi-susume-madamada-lets-go"],
      [2, 2, 0, "hihi-susume"],
      [1, 3, 0, 3, 2, "跟唱", "ほ", "Ho"],
      [1, 3, 2, 3, 4, "跟唱", "ら", "ra"],
      [1, 3, 4, 3, 6, "跟唱", "ほ", "ho"],
      [1, 3, 6, 3, 8, "跟唱", "ら", "ra"],
      [2, 3, 10, "lets-go"],
      [2, 4, 0, "hihi-susume-madamada-lets-go"],
      [1, 6, 0, 6, 4, "跟唱", "Hi"],
      [1, 6, 4, 6, 8, "跟唱", "Hi"],
      [1, 6, 8, 6, 10, "跟唱", "ス", "Su"],
      [1, 6, 10, 6, 12, "跟唱", "ス", "su"],
      [1, 6, 12, 6, 14, "跟唱", "ム", "mu"],
      [1, 6, 14, 7, 0, "跟唱", "ヨ", "yo"]
    ]
  },
  "timeline": [
    [1, 0, 0, 6, 0, "前挥", 8],
    [1, 6, 0, 8, 0, "上举", 32],
    [2, 8, 0, "hihi-susume-madamada-lets-go"],
    [2, 10, 0, "hihi-susume-horahora-lets-go"],
    [1, 12, 0, 15, 0, "里打", 8],
    [1, 15, 0, 16, 0, "前挥", 8],
    [1, 15, 0, 15, 4, "跟唱", "なん", "Nan"],
    [1, 15, 4, 16, 8, "跟唱", "だっ", "da"],
    [1, 15, 8, 15, 12, "跟唱", "け", "kke"],
    [1, 16, 0, 23, 0, "里打", 8],
    [1, 23, 0, 24, 0, "前挥", 8],
    [1, 23, 0, 23, 1, "跟唱", "ぶ", "bu"],
    [1, 23, 1, 23, 4, "跟唱", "つ", "tsu"],
    [1, 23, 4, 24, 5, "跟唱", "か", "ka"],
    [1, 23, 5, 24, 0, "跟唱", "ろう", "rou"],
    [1, 24, 0, 26, 0, "里打", 8],
    [1, 26, 0, 26, 4, "跟唱", "一", "I"],
    [1, 26, 4, 26, 8, "跟唱", "生", "sshou"],
    [1, 26, 8, 26, 12, "跟唱", "懸", "ken"],
    [1, 26, 12, 27, 0, "跟唱", "命", "mei"],
    [1, 27, 0, 27, 3, "跟唱", "なん", "nan"],
    [1, 27, 3, 27, 4, "跟唱", "だ", "da"],
    [1, 27, 4, 27, 7, "跟唱", "よ", "yo"],
    [1, 27, 7, 27, 8, "跟唱", "ずっ", "zu"],
    [1, 27, 8, 27, 12, "跟唱", "と", "tto"],
    [1, 26, 0, 28, 0, "快挥", 4],
    [1, 28, 0, 32, 0, "PPPH", "OOOH"],
    [1, 32, 0, 36, 0, "里跳", true],
    [1, 36, 0, 38, 0, "快挥", 4],
    [1, 36, 0, 36, 4, "跟唱", "限", "Gen"],
    [1, 36, 4, 36, 8, "跟唱", "界", "kai"],
    [1, 36, 8, 36, 10, "跟唱", "し", "shi"],
    [1, 36, 10, 36, 12, "跟唱", "ら", "ra"],
    [1, 36, 12, 37, 0, "跟唱", "ない", "nai"],
    [2, 37, 2, "all-right"],
    [2, 38, 0, "wr-chorus"],
    [1, 53, 0, 54, 0, "前挥", 8],
    [1, 55, 0, 55, 12, "跟唱", "Uuu..."],
    [1, 55, 12, 56, 0, "跟唱", "Hi!"],
    [0, 55, 12, "跳"],
    [1, 54, 0, 56, 0, "上举", 32],
    [1, 56, 0, 62, 0, "前挥", 8],
    [2, 62, 0, "hihi-susume-madamada-lets-go"],
    [2, 64, 0, "hihi-susumuyo"],
    [1, 65, 0, 69, 12, "前挥", 8],
    [1, 69, 8, 69, 12, "跟唱", "Super"],
    [1, 69, 12, 70, 0, "跟唱", "Jump!"],
    [0, 69, 12, "跳"],
    [1, 70, 0, 77, 0, "里打"],
    [2, 77, 0, "dan-da-dan-dan"],
    [1, 78, 8, 85, 0, "前挥", 16],
    [1, 78, 8, 78, 10, "跟唱", "なん", "Nan"],
    [1, 78, 10, 78, 12, "跟唱", "だっ", "da"],
    [1, 78, 12, 79, 0, "跟唱", "け?", "kke?"],
    [1, 79, 8, 79, 10, "跟唱", "そう", "Sou"],
    [1, 79, 10, 79, 12, "跟唱", "だっ", "da"],
    [1, 79, 12, 80, 0, "跟唱", "た!", "tta!"],
    [1, 80, 8, 80, 10, "跟唱", "愛", "Ai"],
    [1, 80, 10, 80, 12, "跟唱", "なん", "nan"],
    [1, 80, 12, 81, 0, "跟唱", "だ?", "da?"],
    [1, 81, 8, 81, 10, "跟唱", "そう", "Sou"],
    [1, 81, 10, 81, 12, "跟唱", "なん", "nan"],
    [1, 81, 12, 82, 0, "跟唱", "だ!", "da!"],
    [1, 82, 8, 82, 10, "跟唱", "大", "Dai"],
    [1, 82, 10, 82, 12, "跟唱", "胆", "tan"],
    [1, 82, 12, 83, 0, "跟唱", "に?", "ni?"],
    [1, 83, 8, 83, 10, "跟唱", "そう", "Sou"],
    [1, 83, 10, 83, 12, "跟唱", "だっ", "da"],
    [1, 83, 12, 84, 0, "跟唱", "た!", "tta!"],
    [1, 84, 8, 84, 10, "跟唱", "大", "Dai"],
    [1, 84, 10, 84, 12, "跟唱", "胆", "tan"],
    [1, 84, 12, 85, 0, "跟唱", "に?", "ni?"],
    [1, 85, 0, 85, 3, "跟唱", "一", "I"],
    [1, 85, 3, 85, 4, "跟唱", "生", "sshou"],
    [1, 85, 4, 85, 6, "跟唱", "懸", "ken"],
    [1, 85, 6, 85, 8, "跟唱", "命", "mei"],
    [1, 85, 8, 85, 12, "跟唱", "だ!", "da!"],
    [1, 85, 0, 85, 8, "前挥", 8],
    [1, 86, 0, 90, 0, "PPPH", "OOOH"],
    [1, 90, 0, 94, 0, "里跳", true],
    [1, 94, 0, 96, 0, "快挥", 4],
    [2, 94, 0, "shinpai-iranai"],
    [2, 95, 2, "all-right"],
    [2, 96, 0, "wr-chorus"],
    [1, 111, 0, 112, 0, "前挥", 16],
    [1, 112, 0, 120, 0, "上举", 32],
    [2, 144, 0, "wr-chorus"],
    [1, 120, 0, 123, 0, "前挥", 8],
    [1, 123, 0, 123, 4, "跟唱", "Three"],
    [1, 123, 4, 123, 8, "跟唱", "Two"],
    [1, 123, 8, 123, 12, "跟唱", "One"],
    [1, 123, 12, 124, 14, "跟唱", "Ze"],
    [1, 123, 14, 124, 0, "跟唱", "ro!"],
    [1, 123, 0, 124, 0, "快挥"],
    [2, 124, 0, "hihi-super-jump"],
    [2, 125, 0, "ohyeah-super-jump"],
    [1, 126, 0, 128, 0, "快挥"],
    [1, 126, 2, 126, 4, "跟唱", "Life"],
    [1, 126, 4, 126, 6, "跟唱", "is"],
    [1, 126, 8, 126, 12, "跟唱", "won"],
    [1, 126, 12, 126, 14, "跟唱", "der"],
    [1, 126, 14, 127, 2, "跟唱", "ま", "Ma"],
    [1, 127, 2, 127, 4, "跟唱", "だ", "da"],
    [1, 127, 4, 127, 6, "跟唱", "ま", "ma"],
    [1, 127, 6, 127, 8, "跟唱", "だ", "da"],
    [1, 127, 8, 127, 12, "跟唱", "Let"],
    [1, 127, 12, 127, 14, "跟唱", "'s"],
    [1, 127, 14, 128, 0, "跟唱", "go"],
    [2, 128, 0, "hihi-super-jump"],
    [2, 129, 0, "ohyeah-super-jump"],
    [1, 129, 0, 131, 12, "快挥"],
    [1, 130, 2, 130, 4, "跟唱", "Life"],
    [1, 130, 4, 130, 6, "跟唱", "is"],
    [1, 130, 8, 130, 12, "跟唱", "won"],
    [1, 130, 12, 130, 14, "跟唱", "der"],
    [1, 130, 14, 131, 2, "跟唱", "Won"],
    [1, 131, 2, 131, 4, "跟唱", "der"],
    [1, 131, 4, 131, 6, "跟唱", "fu"],
    [1, 131, 6, 131, 8, "跟唱", "l"],
    [1, 131, 8, 132, 12, "跟唱", "Rush"],
    [1, 131, 12, 132, 0, "跟唱", "Hi!"],
    [0, 131, 12, "跳"],
    [1, 132, 0, 136, 0, "PPPH", "OOOH"],
    [1, 136, 0, 140, 0, "里跳", true],
    [1, 140, 0, 140, 4, "跟唱", "限", "Gen"],
    [1, 140, 4, 140, 8, "跟唱", "界", "kai"],
    [1, 140, 8, 140, 10, "跟唱", "そ", "so"],
    [1, 140, 10, 140, 12, "跟唱", "れ", "re"],
    [1, 140, 12, 140, 14, "跟唱", "な", "na"],
    [1, 140, 14, 141, 0, "跟唱", "に", "ni"],
    [1, 141, 2, 141, 4, "跟唱", "No"],
    [1, 141, 4, 141, 6, "跟唱", "thank"],
    [1, 141, 6, 141, 8, "跟唱", "you"],
    [1, 141, 10, 141, 12, "跟唱", "O"],
    [1, 141, 12, 142, 0, "跟唱", "K"],
    [2, 142, 0, "shinpai-iranai-2"],
    [2, 143, 2, "all-right"],
    [1, 140, 0, 144, 0, "快挥"],
    [1, 159, 0, 160, 0, "快挥"],
    [2, 160, 0, "快挥-fufu-fuwafuwa"],
    [1, 164, 0, 168, 0, "快挥"],
    [2, 168, 0, "wr-follow-ending"],
    [1, 171, 0, 174, 12, "快挥"],
    [1, 174, 14, 176, 0, "前挥", 18],
    [1, 176, 0, 177, 0, "上举", 16],
    [1, 177, 0, 177, 12, "跟唱", "Uuu..."],
    [1, 177, 12, 178, 0, "跟唱", "Go!"],
    [0, 177, 12, "跳"],
    [1, 178, 0, 185, 0, "快挥"],
    [1, 185, 0, 187, 0, "前挥"],
    [1, 187, 0, 187, 8, "跟唱", "Uuu..."],
    [1, 187, 12, 188, 0, "跟唱", "Hi!"],
    [0, 187, 12, "跳"],
  ]
};

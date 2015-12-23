# LoveCall 格式说明文档

## 格式简介

LoveCall 使用 JSON 格式的 call 表驱动, 目前所有 call 表都以 CommonJS 模块的形式随主程序一起编译, 以 call 表数据作为 CommonJS 模块的导出量 (`module.exports`).

合法的 LoveCall 表是合法的 JSON 对象, 以 `lovecall` 键值 (整型) 指示格式版本.
以下是针对各版本格式的介绍.


## 通用说明

* **时间采用小节/四分拍记法**, 从 0 开始. 也就是说一小节分 0 到 15 总共 16 个四分拍, 第一小节序号是 0. 之后提到节拍默认指四分拍.
* 时间轴事件的记法是 `[事件大类, ...]`, 目前分为以下几个大类:
	- `0`: **点事件**. 格式为 `[0, 小节, 节拍, "事件类型", 事件参数...]`
	- `1`: **长事件**, 有起始和终止时间点. 格式为 `[1, 起始小节, 起始节拍, 终止小节, 终止节拍, "事件类型", 事件参数...]`
	- `2`: **序列事件**, 以该事件起始时间为参考引入一整条事件序列. 格式为 `[2, 小节, 节拍, "序列名"]`
* 所有的**时间段都是左闭右开区间**, 意味着一般不用担心两个首尾相接的长事件会产生重叠.
* 事件参数随不同事件类型而不同, 也可以不带, 具体请参阅各事件的说明.


## 第 0 版

**注意: 项目前期 call 表格式不稳定! 待稳定之后我们将冻结其为第 1 版.**

以下均以实际的 LoveCall 表文件为例, 以注释形式说明. 如无特殊说明, 所有属性都挂在最外层 JSON 对象上.

### 歌曲元数据

```js
{
  "lovecall": 0,  // 版本号, 必须为 0

  // 元数据
  "metadata": {
    // 歌曲信息
    "song": {
      "title": "それは僕たちの奇跡",  // 歌曲标题
      "artist": "μ's",  // 演唱者
      "album": "それは僕たちの奇跡",  // 专辑

	  // 远程获取歌曲文件及专辑封面时的文件基准名, 由服务器管理人员维护
      "remoteBasename": "kiseki",

	  // 歌曲文件信息
      "sources": {
		// "fallback:" 是加载的歌曲文件 hash 没有匹配时采用的特殊标记
        "fallback:": {
          "offset": 2798  // 整体偏移时间, 单位毫秒
        },

		// hash 的记法是 算法:hash, 目前仅支持 MD5 算法
        "md5:cbdf9f9104fd929034d004491eee9406": {
          "offset": 2798
        }
      },

	  // 节奏信息, 所有毫秒数都不计入前述的整体偏移时间
      "timing": [
		// [起始毫秒数, BPM, 每小节拍数, 每拍长度 (几分音符), 该段起始小节序号]
		// 目前仅支持 4/4 拍
        [0, 180.0, 4, 4, 0]
      ]
    },

	// 本曲使用到的应援色, 可以不填
    "palette": [
    ]
  }

  // (待续)
}
```


### 曲式和应援色

```js
{
  // (续)

  // 曲式, 可以不填, 目前只用于在进度条上标出段落
  "form": [
    // [起始小节, 起始节拍, 结束小节, 结束节拍, 乐段名称]
	// I = intro = 前奏
	// A = A melo
	// B = B melo
	// C = chorus = 副歌
	// G = gap = 间奏; 实际不属于其他类别的段都可以记作 G
	// S = solo
	// O = outro = 尾声
    [0, 0, 8, 0, "I"],
    [8, 0, 16, 0, "G0"],
    [16, 0, 32, 0, "A1"],
    [32, 0, 42, 0, "B1"],
    [42, 0, 58, 0, "C1"],
    [58, 0, 66, 0, "G1"],
    [66, 0, 82, 0, "A2"],
    [82, 0, 100, 0, "B2"],
    [100, 0, 116, 0, "C2"],
    [116, 0, 126, 0, "G2"],
    [126, 0, 130, 0, "G3"],
    [130, 0, 140, 0, "G4"],
    [140, 0, 156, 0, "C3"],
    [156, 0, 176, 0, "C4"],
    [176, 0, 184, 0, "G4"],
    [184, 0, -1, -1, "O"]
  ],
  "colors": [
    // 颜色段, 目前用于在进度条上指示换色段
	// [起始小节, 起始节拍, 结束小节, 结束节拍, 颜色序号 (从 0 开始)]
	// 其中小节与节拍同为 -2 表示歌曲最开头, 同为 -1 表示歌曲最末尾
	// 颜色为 -1 表示可任意选择颜色, 这时进度条相应段将不会带有特定颜色
  ]

  // (待续)
}
```


### 自定义序列

序列内的时间都是相对时间, 合理使用序列可以大大减少制作 call 表过程的重复工作.

关于事件的介绍请参阅后文.

```js
{
  // (续)

  // 自定义序列, 可以为空
  "sequences": {
    // 序列名: [动作序列]
	// 这里截取的片段是特殊情况, 所示节拍是三分拍, 因为只持续了一个小节
	// 所以没有特意发明记法. 这说明在该版本的 LoveCall 下节拍可以是小数

	// 前略
	"saigo-made": [
      [1, 0, 0, 0, 3.5555555555555554, "前挥", 4],
      [1, 0, 0, 0, 3.5555555555555554, "跟唱", "最", "Sai"],
      [1, 0, 3.5555555555555554, 0, 5.333333333333333, "跟唱", "後", "go"],
      [1, 0, 5.333333333333333, 0, 8.88888888888889, "前挥", 4],
      [1, 0, 5.333333333333333, 0, 8.88888888888889, "跟唱", "ま", "ma"],
      [1, 0, 8.88888888888889, 0, 10.666666666666666, "跟唱", "で", "de"]
	  // 略
    ],

	// 中略
	// 这里说明序列事件可以嵌套
    "chorus-ending": [
      [2, 0, 0, "chorus-common"],
      [1, 15, 0, 16, 0, "快挥"],
      [2, 16, 0, "chorus-common"]
    ]
  }

  // 待续, timeline 属性在下节介绍
}
```


### 主时间轴

```js
{
  // (续)

  // 事件列表
  "timeline": [
    [1, 0, 0, 7, 0, "上举", 16],
    [2, 5, 2, "kokorode"],
    [2, 7, 0, "fufufu"],
    [1, 8, 0, 14, 8, "里跳", true]
	// 略
  ]
}
```

以上便是 LoveCall 表文件的结构.


## 基本事件介绍

### 点事件

#### Fu

产生一个 `Fu!` 动作. 无参数.

```js
[0, 小节, 节拍, "fu"]
```


#### FuFu

产生两个相距 2 拍的 `Fu!` 动作. 无参数.

```js
[0, 小节, 节拍, "fufu"]
```


#### 跳

产生一个 `跳!` 动作, 可带一个布尔型参数指明是否伴随呼声 "Hi!", 默认不带.

```js
[0, 小节, 节拍, "跳"]         // 不带 "Hi!"
[0, 小节, 节拍, "跳", false]  // 也不带 "Hi!"
[0, 小节, 节拍, "跳", true]   // 带 "Hi!"
```


### 长事件

#### 周期性事件

##### 上举

按周期产生一个或多个 `上举` 动作, 周期必须指定.

```js
// [1, 起始小节, 起始节拍, 结束小节, 结束节拍, "上举", 事件间隔节拍数]

[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "上举", 16]  // 每个上举持续 1 个小节
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "上举", 32]  // 每个上举持续 2 个小节
```


##### 前挥

机理同上, 但参数可以不指定, 默认周期为 8 拍.

```js
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "前挥", 4]  // 每个前挥持续 1 个四分音符
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "前挥"]  // 默认持续 1 个二分音符
```


##### 快挥

机理同上, 但默认周期为 4 拍.


##### Fuwa

产生一个或多个 `Fuwa` 动作, 周期固定为 4 拍. 无参数.


##### 里打

产生 0 个或多个 `里打` 动作, 周期固定为 8 拍. 无参数.

**动作代表挥棒, 因此从起始时间点过 4 拍开始产生, 请把事件下在第 0 或 8 拍上**

```js
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "里打"]
```


##### 里跳

机理同上, 可以带参数指定是否每一跳伴随呼声 "Hi!", 默认不带, 与 `跳` 事件相同.


##### PPPH

产生 PPPH 动作, 需要指定 PPPH 变体形式. 目前只支持 `OOOH` (Oh~~~ Hi!) 一种变体.

```js
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "PPPH", "OOOH"]
```


#### 单体长事件

##### 警报

**TODO: 原理上更像点事件, 待修复**

内置序列, 产生从起始时间点开始共 2 个小节的 GT 警报动作, 没有参数.


##### 欢呼

产生指定时间段内的 `欢呼` 动作, 没有参数.


##### 跟唱

在跟唱轴上产生跟唱动作, 必须至少带一个参数指定跟唱内容. 可选择带或不带第二个参数指定跟唱内容的罗马字转写, 不带则默认与跟唱内容相同.

```js
// 正确, 罗马字 "Snow halation"
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "跟唱", "Snow halation"]

// 不好, 罗马字 "一生懸命"
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "跟唱", "一生懸命"]

// 正确, 罗马字 "Isshoukenmei"
[1, 起始小节, 起始节拍, 结束小节, 结束节拍, "跟唱", "一生懸命", "Isshoukenmei"]
```
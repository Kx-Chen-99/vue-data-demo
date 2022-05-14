const Mock = require("mockjs")

// 类正态分布随机整数
function random(min, max){
  return Math.round(Math.random()*(max-min))+min;
}

module.exports = function(app) {
  app.get('/data', function(rep, res){
    let json = {
      "CPU|2000-4000": [{
        "Benchmark|1": [ "CINT2017", "CFP2017", "RINT2017", "RFP2017", "CINT2006", "CFP2006", "RINT2006", "RFP2006" ],
        "System": "@title(2,3)",
        "Professor|1": [ "AMD", "Intel"],
        "MHz": function() {
          return random(17,40)*100
        },
        "Cores": function() {
          return random(1,100)*2
        },
        "Chips": function() {
          const i = Math.random() // 生成0-1的随机数
          if(i <= 0.002) {
            switch (random(1,5)) {
              case 1:
                return 3
              case 2:
                return 6
              case 3:
                return 16
              case 4:
                return 24
              case 5:
                return 32
            }
          }
          else if(i <= 0.006) return 8
          else if(i <= 0.173) return 1
          else if(i <= 0.34) return 4
          else return 2
        },
        "Enabled": function() {
          const i = Math.random()
          if (i<=0.001625) return 4
          else if (i<=0.0125) return 8
          else if (i<=0.0625) return 1
          else return 2
        },
        "Memory": function() {
          return 32*random(1,10) + "GB"
        },
        "Storage|1": ["1 x 1 TB SATA SSD", "1 x 1 TB  HDD, 7.2K RPM", "1 x 1 TB SATA, 7200 RPM, RAID 0", "1 x 1200 GB SAS, 10000 RPM", "1 x 400 GB SAS SSD, RAID 0"],
        "Test": /[A-Z]/, // 测试者、被测试者
        "Date": function() {
          return random(2006,2022) + "-" + random(1,12)
        },
        "Cache1|1": ["32 KB I + 32 KB D on chip per core", "64 KB I + 32 KB D on chip per core", "32 KB I + 64 KB D on chip per core", "64 KB I + 64 KB D on chip per core"],
        "Cache2|1": ["1 MB I+D on chip per core", "1.25 MB I+D on chip per core", "2 MB I+D on chip per chip", "256 KB I+D on chip per core", "512 KB I+D on chip per core"],
        "Cache3|1": ["35.75 MB I+D on chip per chip", "38.5 MB I+D on chip per chip", "11 MB I+D on chip per chip", "24.75 MB I+D on chip per chip", "11 MB I+D on chip per chip", "12 MB I+D on chip per chip"],
        "Baseline|8-2000.2":100,
        "Base400|8-2000.2":100,
        "Base401|8-2000.2":101,
        "Base403|8-2000.2":102,
        "Base410|8-2000.2":103,
        "Base416|8-2000.2":104,
        "Base429|8-2000.2":105,
        "Base433|8-2000.2":106,
        "Base434|8-2000.2":107,
        "Base435|8-2000.2":108,
        "Base436|8-2000.2":109,
        "Base437|8-2000.2":110,
        "Base444|8-2000.2":111,
        "Base445|8-2000.2":112,
        "Base447|8-2000.2":113,
        "Base450|8-2000.2":114,
        "Base453|8-2000.2":115,
        "Base454|8-2000.2":116,
        "Base456|8-2000.2":117,
        "Base458|8-2000.2":118,
        "Base459|8-2000.2":119,
        "Base462|8-2000.2":120,
        "Base464|8-2000.2":121,
        "Base465|8-2000.2":122,
        "Base470|8-2000.2":123,
        "Base471|8-2000.2":124,
        "Base473|8-2000.2":125,
        "Base481|8-2000.2":126,
        "Base482|8-2000.2":127,
        "Base483|8-2000.2":128,
        "Base500|8-2000.2":129,
        "Base502|8-2000.2":130,
        "Base503|8-2000.2":131,
        "Base505|8-2000.2":132,
        "Base507|8-2000.2":133,
        "Base508|8-2000.2":134,
        "Base510|8-2000.2":135,
        "Base511|8-2000.2":136,
        "Base519|8-2000.2":137,
        "Base520|8-2000.2":138,
        "Base521|8-2000.2":139,
        "Base523|8-2000.2":140,
        "Base525|8-2000.2":141,
        "Base526|8-2000.2":142,
        "Base527|8-2000.2":143,
        "Base531|8-2000.2":144,
        "Base538|8-2000.2":145,
        "Base541|8-2000.2":146,
        "Base544|8-2000.2":147,
        "Base548|8-2000.2":148,
        "Base549|8-2000.2":149,
        "Base554|8-2000.2":150,
        "Base557|8-2000.2":151,
        "Base600|8-2000.2":152,
        "Base602|8-2000.2":153,
        "Base603|8-2000.2":154,
        "Base605|8-2000.2":155,
        "Base607|8-2000.2":156,
        "Base619|8-2000.2":157,
        "Base620|8-2000.2":158,
        "Base621|8-2000.2":159,
        "Base623|8-2000.2":160,
        "Base625|8-2000.2":161,
        "Base627|8-2000.2":162,
        "Base628|8-2000.2":163,
        "Base631|8-2000.2":164,
        "Base638|8-2000.2":165,
        "Base641|8-2000.2":166,
        "Base644|8-2000.2":167,
        "Base648|8-2000.2":168,
        "Base649|8-2000.2":169,
        "Base654|8-2000.2":170,
        "Base657|8-2000.2":171,
      }]
    }
    res.json(Mock.mock(json))
  })
}

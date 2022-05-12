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
        "Professer|1": [ "AMD", "Intel"],
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
        "Baseline": function() {
          return random(10,2000)
        },
        "Test": /[A-Z]/, // 测试者、被测试者
        "Test Date": function() {
          return random(2006,2022) + "-" + random(1,12)
        },
        "Cache1|1": ["32 KB I + 32 KB D on chip per core", "64 KB I + 32 KB D on chip per core", "32 KB I + 64 KB D on chip per core", "64 KB I + 64 KB D on chip per core"],
        "Cache2|1": ["1 MB I+D on chip per core", "1.25 MB I+D on chip per core", "2 MB I+D on chip per chip", "256 KB I+D on chip per core", "512 KB I+D on chip per core"],
        "Cache3|1": ["35.75 MB I+D on chip per chip", "38.5 MB I+D on chip per chip", "11 MB I+D on chip per chip", "24.75 MB I+D on chip per chip", "11 MB I+D on chip per chip", "12 MB I+D on chip per chip"]
      }]
    }
    res.json(Mock.mock(json))
  })
}

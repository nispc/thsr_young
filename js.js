$(document).ready(function(){
      //查詢訂票步驟是否為第二步。
      var  step02_html = $('.Step02').html();
      var flag = step02_html.search('strong');
      if(flag >= 0) {
          //移除更早車次、更晚車次連結，不然會有bug。
          $('#BookingS2Form_TrainQueryDataViewPanel_PreAndLaterTrainContainer_preTrainLink').remove();
          $('#BookingS2Form_TrainQueryDataViewPanel_PreAndLaterTrainContainer_laterTrainLink').remove();

          //增加早鳥優惠票的警告標示。
          $('span:contains(*早鳥優惠僅適用標準車廂對號座全票)').after('<br /><span>*少年優惠票之購票僅限於各車站售票窗口辦理。購票時，須出示有效的身份證件。</span>');
          
          //從網站抓取要搭星期幾的車。date存取1~7。
          var date = $('.section_title span:nth-child(5)').html();
          date = date[3];
          switch(date){
              case '一':
                  date = 1;
                  break;
              case '二':
                  date = 2;
                  break;
              case '三':
                  date = 3;
                  break;
              case '四':
                  date = 4;
                  break;
              case '五':
                  date = 5;
                  break;
              case '六':
                  date = 6;
                  break;
              case '日':
                  date = 7;
                  break;
            }
            //debug:console.log("date = "+date);

            //車次依序存入陣列qyery_code。
            var query_code = [];
            $('#BookingS2Form_TrainQueryDataViewPanel>table>tbody>tr:not(:first)>td:nth-child(2)>span').each(function(){
          	   query_code[query_code.length] = $(this).html();
            });

            //debug:for(var a = 0;a < query_code.length;a++)
          	 //debug:  console.log(query_code[a]);

            //少年優惠票建表。
            var thsr_list= [
            //  [班次,一,二,三,四,五,六,日,折數],
                [551,true,true,true,true,true,true,true,5  ],
                [625,true,false,false,false,false,false,false,5  ],
                [633,true,true,true,true,false,false,false,5  ],
                [1635,false,false,false,false,false,false,true,5  ],
                [641,true,true,true,true,false,false,false,5  ],
                [1529,true,true,true,true,false,false,false,5  ],
                [1247,false,false,false,false,false,true,false,5  ],
                [753,false,false,false,false,false,true,false,5  ],
                [255,false,true,false,false,false,false,false,5  ],
                [757,false,true,false,false,false,false,false,5  ],
                [763,true,true,true,true,false,false,false,5  ],
                [541,true,true,true,true,false,false,false,5  ],
                [545,true,true,true,true,true,false,true,5  ],
                [502,false,false,false,false,false,false,true,5  ],
                [506,false,false,false,false,false,false,true,5  ],
                [1508,false,true,true,true,true,false,false,5  ],
                [604,false,false,false,false,false,false,true,5  ],
                [1510,true,true,true,true,true,false,false,5  ],
                [612,false,false,false,false,false,false,true,5  ],
                [114,false,false,false,false,false,false,true,5  ],
                [1618,false,false,false,false,false,false,true,5  ],
                [122,false,true,true,true,true,false,false,5  ],
                [138,false,false,false,false,false,false,true,5  ],
                [640,false,true,true,true,false,false,false,5  ],
                [736,true,true,true,true,false,false,false,5  ],
                [1742,false,false,false,false,true,false,false,5  ],
                [246,false,false,false,false,false,true,false,5  ],
                [1750,false,false,false,false,false,true,false,5  ],
                [752,false,false,false,false,false,true,false,5  ],
                [254,false,false,true,true,false,false,false,5  ],
                [756,true,true,true,true,false,false,false,5  ],
                [762,true,true,true,true,false,false,false,5  ],
                [334,true,true,true,true,false,false,false,5  ],
                [596,true,true,true,true,true,true,true,5  ],
                [1611,false,false,false,false,false,true,false,7  ],
                [613,false,false,false,false,false,false,true,7  ],
                [115,false,false,false,false,false,false,true,7  ],
                [1619,true,false,false,false,false,true,false,7  ],
                [625,false,true,true,true,false,false,false,7  ],
                [1627,true,true,true,true,false,false,false,7  ],
                [629,false,true,true,true,false,false,false,7  ],
                [131,true,true,true,true,false,false,false,7  ],
                [633,false,false,false,false,true,false,false,7  ],
                [1635,false,false,false,false,false,true,false,7  ],
                [135,false,false,false,false,false,false,true,7  ],
                [637,true,true,true,true,true,false,true,7  ],
                [139,true,true,true,true,true,false,true,7  ],
                [641,false,false,false,false,false,false,true,7  ],
                [143,false,false,false,false,false,false,true,7  ],
                [645,false,false,false,false,false,false,true,7  ],
                [649,false,false,false,false,false,false,true,7  ],
                [231,false,false,false,true,false,false,false,7  ],
                [733,true,true,true,false,false,false,false,7  ],
                [1233,false,false,false,false,false,false,true,7  ],
                [1735,false,false,false,false,false,false,true,7  ],
                [239,true,true,true,true,false,true,false,7  ],
                [741,true,true,true,true,false,true,false,7  ],
                [749,false,false,false,false,false,true,false,7  ],
                [1751,false,false,false,false,false,true,false,7  ],
                [255,true,false,true,true,false,true,false,7  ],
                [757,true,false,true,true,false,true,false,7  ],
                [259,true,true,true,true,false,false,false,7  ],
                [761,true,true,true,true,false,false,false,7  ],
                [763,false,false,false,false,false,true,false,7  ],
                [399,true,true,true,true,false,true,false,7  ],
                [541,false,false,false,false,true,true,true,7  ],
                [545,false,false,false,false,false,true,false,7  ],
                [502,false,true,true,true,true,false,false,7  ],
                [506,false,true,true,true,true,true,false,7  ],
                [604,true,false,false,false,false,true,false,7  ],
                [1618,false,false,false,false,false,true,false,7  ],
                [122,true,false,false,false,false,false,true,7  ],
                [628,true,true,true,true,true,false,false,7  ],
                [130,true,true,true,true,true,false,false,7  ],
                [632,true,true,true,true,true,false,false,7  ],
                [636,false,false,false,false,false,false,true,7  ],
                [138,true,true,true,true,true,false,false,7  ],
                [640,true,false,false,false,true,false,true,7  ],
                [652,false,false,false,false,false,true,false,7  ],
                [1154,false,false,false,false,false,true,true,7  ],
                [1528,false,false,false,false,true,false,false,7  ],
                [728,false,false,false,false,false,true,false,7  ],
                [230,true,true,true,true,false,true,false,7  ],
                [238,true,true,true,true,false,false,false,7  ],
                [740,true,true,true,true,false,false,false,7  ],
                [246,true,true,true,true,false,false,false,7  ],
                [748,true,true,true,true,false,true,false,7  ],
                [254,true,true,false,false,true,true,false,7  ],
                [756,false,false,false,false,false,true,false,7  ],
                [762,false,false,false,false,true,true,false,7  ],
                [334,false,false,false,false,true,true,true,7  ]
            ];

            //新增少年優惠票欄位。
            $('#BookingS2Form_TrainQueryDataViewPanel>table>tbody>tr:first').append('<th bgcolor="#EEEEEE">少年優惠票*</th>');
            var a = 0;
            $('#BookingS2Form_TrainQueryDataViewPanel>table>tbody>tr:not(:first)').each(function(){
                var flag = false;
                //循環搜尋法，比對合乎條件之值。
                for(var b = 0;b < thsr_list.length;b++){
                    if (query_code[a] == thsr_list[b][0] && thsr_list[b][date] == true) {
                        flag = true;
                        var off = thsr_list[b][8]; 
                        break;
                    };
                }
                if (flag) 
                    $(this).append('<td>'+off+'折票</td>');
                else
                    $(this).append('<td>--</td>');
                a++;
            });
      }
});


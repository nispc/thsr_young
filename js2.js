$(document).ready(function(){
    $('#BookingS2Form_TrainQueryDataViewPanel_PreAndLaterTrainContainer_preTrainLink').remove();
    $('#BookingS2Form_TrainQueryDataViewPanel_PreAndLaterTrainContainer_laterTrainLink').remove();
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

    console.log("date = "+date);

    var query_code = [];

    var table = '#BookingS2Form_TrainQueryDataViewPanel>table ';

    $(table + 'tbody>tr:first').append('<th bgcolor="#EEEEEE">少年優惠票</th>');

    $(table + 'tbody>tr:not(:first)>td:nth-child(2)>span').each(function(){
    	query_code[query_code.length] = $(this).html();
    });

    for(var a = 0;a < query_code.length;a++)
    	console.log(query_code[a]);

    $.getJSON('thsr_list.json', function(data) {
    	$.each(data, function(key, val) {
    		console.log(key,val);
    	});
    });

    var thsr_list= [
  [551,"1","1","1","1","1","1","1",5  ],
  [625,"1","0","0","0","0","0","0",5  ],
  [633,"1","1","1","1","0","0","0",5  ],
  [1635,"0","0","0","0","0","0","1",5  ],
  [641,"1","1","1","1","0","0","0",5  ],
  [1529,"1","1","1","1","0","0","0",5  ],
  [1247,"0","0","0","0","0","1","0",5  ],
  [753,"0","0","0","0","0","1","0",5  ],
  [255,"0","1","0","0","0","0","0",5  ],
  [757,"0","1","0","0","0","0","0",5  ],
  [763,"1","1","1","1","0","0","0",5  ],
  [541,"1","1","1","1","0","0","0",5  ],
  [545,"1","1","1","1","1","0","1",5  ],
  [502,"0","0","0","0","0","0","1",5  ],
  [506,"0","0","0","0","0","0","1",5  ],
  [1508,"0","1","1","1","1","0","0",5  ],
  [604,"0","0","0","0","0","0","1",5  ],
  [1510,"1","1","1","1","1","0","0",5  ],
  [612,"0","0","0","0","0","0","1",5  ],
  [114,"0","0","0","0","0","0","1",5  ],
  [1618,"0","0","0","0","0","0","1",5  ],
  [122,"0","1","1","1","1","0","0",5  ],
  [138,"0","0","0","0","0","0","1",5  ],
  [640,"0","1","1","1","0","0","0",5  ],
  [736,"1","1","1","1","0","0","0",5  ],
  [1742,"0","0","0","0","1","0","0",5  ],
  [246,"0","0","0","0","0","1","0",5  ],
  [1750,"0","0","0","0","0","1","0",5  ],
  [752,"0","0","0","0","0","1","0",5  ],
  [254,"0","0","1","1","0","0","0",5  ],
  [756,"1","1","1","1","0","0","0",5  ],
  [762,"1","1","1","1","0","0","0",5  ],
  [334,"1","1","1","1","0","0","0",5  ],
  [596,"1","1","1","1","1","1","1",5  ],
  [1611,"0","0","0","0","0","1","0",7  ],
  [613,"0","0","0","0","0","0","1",7  ],
  [115,"0","0","0","0","0","0","1",7  ],
  [1619,"1","0","0","0","0","1","0",7  ],
  [625,"0","1","1","1","0","0","0",7  ],
  [1627,"1","1","1","1","0","0","0",7  ],
  [629,"0","1","1","1","0","0","0",7  ],
  [131,"1","1","1","1","0","0","0",7  ],
  [633,"0","0","0","0","1","0","0",7  ],
  [1635,"0","0","0","0","0","1","0",7  ],
  [135,"0","0","0","0","0","0","1",7  ],
  [637,"1","1","1","1","1","0","1",7  ],
  [139,"1","1","1","1","1","0","1",7  ],
  [641,"0","0","0","0","0","0","1",7  ],
  [143,"0","0","0","0","0","0","1",7  ],
  [645,"0","0","0","0","0","0","1",7  ],
  [649,"0","0","0","0","0","0","1",7  ],
  [231,"0","0","0","1","0","0","0",7  ],
  [733,"1","1","1","0","0","0","0",7  ],
  [1233,"0","0","0","0","0","0","1",7  ],
  [1735,"0","0","0","0","0","0","1",7  ],
  [239,"1","1","1","1","0","1","0",7  ],
  [741,"1","1","1","1","0","1","0",7  ],
  [749,"0","0","0","0","0","1","0",7  ],
  [1751,"0","0","0","0","0","1","0",7  ],
  [255,"1","0","1","1","0","1","0",7  ],
  [757,"1","0","1","1","0","1","0",7  ],
  [259,"1","1","1","1","0","0","0",7  ],
  [761,"1","1","1","1","0","0","0",7  ],
  [763,"0","0","0","0","0","1","0",7  ],
  [399,"1","1","1","1","0","1","0",7  ],
  [541,"0","0","0","0","1","1","1",7  ],
  [545,"0","0","0","0","0","1","0",7  ],
  [502,"0","1","1","1","1","0","0",7  ],
  [506,"0","1","1","1","1","1","0",7  ],
  [604,"1","0","0","0","0","1","0",7  ],
  [1618,"0","0","0","0","0","1","0",7  ],
  [122,"1","0","0","0","0","0","1",7  ],
  [628,"1","1","1","1","1","0","0",7  ],
  [130,"1","1","1","1","1","0","0",7  ],
  [632,"1","1","1","1","1","0","0",7  ],
  [636,"0","0","0","0","0","0","1",7  ],
  [138,"1","1","1","1","1","0","0",7  ],
  [640,"1","0","0","0","1","0","1",7  ],
  [652,"0","0","0","0","0","1","0",7  ],
  [1154,"0","0","0","0","0","1","1",7  ],
  [1528,"0","0","0","0","1","0","0",7  ],
  [728,"0","0","0","0","0","1","0",7  ],
  [230,"1","1","1","1","0","1","0",7  ],
  [238,"1","1","1","1","0","0","0",7  ],
  [740,"1","1","1","1","0","0","0",7  ],
  [246,"1","1","1","1","0","0","0",7  ],
  [748,"1","1","1","1","0","1","0",7  ],
  [254,"1","1","0","0","1","1","0",7  ],
  [756,"0","0","0","0","0","1","0",7  ],
  [762,"0","0","0","0","1","1","0",7  ],
  [334,"0","0","0","0","1","1","1",7  ]
];

      var a = 0;
      $(table + 'tbody>tr:not(:first)').each(function(){
          var flag = false;
          for(var b = 0;b < thsr_list.length;b++)
          {
              if (query_code[a] == thsr_list[b][0] && thsr_list[b][date] == 1) {
                  flag = true;
                  var off = thsr_list[b][8];
                  break;
              };
          }
          if (flag) 
              $(this).append('<td>'+off+'折票</td>');
          else
              $(this).append('<td></td>');
          a++;
      });
});


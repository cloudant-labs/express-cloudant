var md = new Showdown.converter();

$(function(){
  $.ajax({
    url: '/readme',
    success: function(data){
      var sections = data.text.split(/(.*)#/g).filter(function(section){
            return section && (section[0] !== '#');
          }),
          header = "#" + sections[0],
          body = sections.slice(1).map(function(section){
            return "##" + section;
          }).join('\n');

      $('#header').html(md.makeHtml(header));
      $('#main').html(md.makeHtml(body));
    }
  });
});
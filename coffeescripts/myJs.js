(function() {
  var projects, source, template;

  projects = [
    {
      title: "Wish+",
      tags: [
        {
          name: "Web",
          "class": "web"
        }
      ],
      image: "http://placehold.it/300x200",
      description: "description1",
      duration: "2011–2013"
    }, {
      title: "Water Ira-Ira Bou",
      tags: [
        {
          name: "Matlab",
          "class": "matlab"
        }, {
          name: "C++",
          "class": "cpp"
        }
      ],
      image: "images/iraira.jpg",
      description: "description2",
      duration: "2013 Winter"
    }, {
      title: "Project3",
      tags: [
        {
          name: "C++",
          "class": "cpp"
        }
      ],
      image: "http://placehold.it/300x200",
      description: "description2",
      duration: "2011–2013"
    }, {
      title: "Hi",
      tags: [
        {
          name: "Matlab",
          "class": "matlab"
        }
      ],
      image: "http://placehold.it/300x200",
      description: "description2",
      duration: "2011–2013"
    }
  ];

  source = $("#projects-template").html();

  template = Handlebars.compile(source);

  $('#project-area').html(template(projects));

  $("#project-area").hover(function() {
    console.log("hover2");
    return $(this).toggleClass("project-area-active");
  });

}).call(this);

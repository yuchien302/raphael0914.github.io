(function() {
  var projects, source, template;

  projects = [
    {
      title: "Project1",
      tags: [
        {
          name: "Web",
          "class": "web"
        }
      ],
      image: "http://placehold.it/300x200",
      description: "description1"
    }, {
      title: "Project2",
      tags: [
        {
          name: "Matlab",
          "class": "matlab"
        }, {
          name: "C++",
          "class": "cpp"
        }
      ],
      image: "http://placehold.it/300x200",
      description: "description2"
    }, {
      title: "Project3",
      tags: [
        {
          name: "C++",
          "class": "cpp"
        }
      ],
      image: "http://placehold.it/300x200",
      description: "description2"
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

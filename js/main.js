$(document).ready(function () {
    let count;

    // Get posts from URL
    // Populate on page
    let data = $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: { get_param: "value" },
        dataType: "json",
        success: function (data) {
            count = data.length;
            // Map content to main section
            $.each(data, function (index, element) {
                let content =
                    '<section class="post" id="post-' + element.id + '">';
                content +=
                    '<h2><a href="#" target="_blank">' +
                    element.title +
                    "</a></h2>";
                content += "<p>" + element.body.slice(0, 14) + "...";
                +"</p></section>";
                $("main.container").append(content);
            });
        },
    });

    // Validate new Post
    $("#new-post-form").submit(function (e) {
        e.preventDefault();

        const title = $("#post-title").val();
        const body = $("#post-body").val();
        let message = "";

        if (title == "") {
            message += "Please Provide a Post Title \n";
        }

        if (body == "") {
            message += "Please Provide a Post Body \n";
        }

        if (message !== "") {
            alert(message);
        } else {
            count++;
            let content = '<section class="post"id="post-' + count + '">';
            content += '<h2><a href="#" target="_blank">' + title + "</a></h2>";
            content += "<p>" + body.slice(0, 14) + "...";
            +"</p></section>";
            $("main.container").append(content);
            $("#modal").modal("hide");
            $("html, body").animate(
                {
                    scrollTop: $("#post-" + count).offset().top,
                },
                2000
            );
        }
    });
});

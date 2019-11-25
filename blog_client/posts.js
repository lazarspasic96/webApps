fetch('http://127.0.0.1:3000')
    .then(res => res.json())
    .then(posts => {
        posts.forEach(post => {

            const h1 = $('<h4></h4>');
            const div = $('<div></div>')
            h1.text(post.title)
            const p = $('<p></p>')
            p.text(post.body)

            div
                .append(h1)
                .append(p)
                .css('background-color', 'green')
                .css('margin', '10px')
            $('header').append(div)






        });

    })

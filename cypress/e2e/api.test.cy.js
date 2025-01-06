describe('Sample API Testing', () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';

    it('GET Request - Fetch Post by ID', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/posts/1`, // endpoint for fetching post with ID 1
        }).then((response) => {
            // Check if the status code is 200
            expect(response.status).to.eq(200);

            // Validate the response body
            expect(response.body.id).to.eq(1);
            expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        });
    });

    it('POST Request - Create a New Post', () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/posts`, // endpoint to create a new post
            body: newPost, // request body
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            // Check if the status code is 201 (Created)
            expect(response.status).to.eq(201);

            // Validate the response body
            expect(response.body.title).to.eq('foo');
            expect(response.body.body).to.eq('bar');
            expect(response.body.userId).to.eq(1);
        });
    });

});
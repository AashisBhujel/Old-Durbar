export default{
    name: 'author',
    type: 'document',
    title: 'AUTHOR',
    fields: [
        {
        name: 'title',
        type: 'string',
        title: 'Title'
        },

        {
            name: 'authordescription',
            type: 'string',
            title: 'AuthorDescription'
            },
 
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }

    ]
}
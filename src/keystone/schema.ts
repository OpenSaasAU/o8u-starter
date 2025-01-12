import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

export const lists: Lists = {
    Author: list({
        access: allowAll,
        fields: {
            name: text(),
            email: text(),
            posts: relationship({ ref: 'Post.author', many: true }),
        }
    }),
    Post: list({
        access: allowAll,
        fields: {
            title: text(),
            content: text(),
            author: relationship({ ref: 'Author.posts' }),
        }
    }),
}
import { Article } from '../../../src/entities/Article'

const defaultArticle = {
    title: 'TEST_ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://habrastorage.org/getpro/habr/upload_files/0c5/9c4/045/0c59c4045832914e0f2d22d298c6ea79.png',
    views: 9999,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
}

export const createArticle = (article: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'dafa' },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body)

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'dafa' },
    })

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}

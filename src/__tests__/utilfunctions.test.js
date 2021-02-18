import { shortenText } from '../utils/functions'
import { wordCount, attachUserName} from '../../server/utils'
import { shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not alter strings with less than 100 Characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText should alter strings with over 100 characters with ellipses', ()=> {
    const shortened =  shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count the number of words in post', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUserName should add correct username to post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should remove posts that have no matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})

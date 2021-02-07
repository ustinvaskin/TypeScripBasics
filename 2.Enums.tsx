// It's like an array and and object

enum Diresctors{
    Up, 
    Down,
    Left,
    Right
}

Diresctors.Up; // 0 
Diresctors.Down; // 1
Diresctors.Left; // 2
Diresctors.Right; // 3


Diresctors[0]; // 'Up'
Diresctors[1]; // 'Down'
Diresctors[2]; // 'Left'
Diresctors[3]; // 'Right'

// Custom name for keys: 

enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

links.vk // 'https://vk.com/'
links.facebook // 'https://facebook.com/'

const arr = [links.vk, links.facebook]

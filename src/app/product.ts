export interface Product {
    id: number,
    name: string,
    description: string,
    proce: number,
    heading1: string,
    heading2: string,
    heading3: string
}

export const products = [
    {
        id: 0,
        name: 'iPhone',
        description: 'Apple Inc.',
        price: 700,
        heading1: '最高のパフォーマンス',
        heading2: 'Best Performance',
        heading3: '性能真好！'
    },
    {
        id: 1,
        name: 'Xperia',
        description: 'From Sony.',
        price: 500,
        heading1: '最高のパフォーマンス',
        heading2: 'Best Performance',
        heading3: '性能真好！'
    },
    {
        id: 2,
        name: 'Galaxy',
        description: 'From Samsung.',
        price: 600,
        heading1: '最高のパフォーマンス',
        heading2: 'Best Performance',
        heading3: '性能真好！'
    },
    {
        id: 3,
        name: 'GooglePhone',
        description: 'From Google.',
        price: 400,
        heading1: '最高のパフォーマンス',
        heading2: 'Best Performance',
        heading3: '性能真好！'
    }
]
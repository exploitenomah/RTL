
import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/api/sundaes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Sundae',
          price: '$1.99',
          description: 'A classic sundae with ice cream and toppings',
          toppings: ['chocolate', 'strawberry', 'vanilla']
        },
        {
          id: 2,
          name: 'Sundae with nuts',
          price: '$2.99',
          description: 'A classic sundae with ice cream and nuts',
          toppings: ['chocolate', 'strawberry', 'vanilla', 'nuts']
        }
      ])
    )
  }),
  rest.get('http://localhost:3000/api/toppings', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        toppings: [
          {
            name: 'chocolate',
            imagePath: '/images/chocolate.png'
          },
          {
            name: 'strawberry',
            imagePath: '/images/strawberry.png'
          },
          {
            name: 'vanilla',
            imagePath: '/images/vanilla.png'
          },
          {
            name: 'nuts',
            imagePath: '/images/nuts.png'
          },
        ]
      })
    )
  }),
  rest.post('http://localhost:3000/api/sundaes/order', (req, res, ctx) => {
    const order = req.body()
    return res(
      ctx.status(201),
      ctx.json({
        ...order,
        message: 'Order placed successfully',
        status: 'success',
      })
    )
  })
]

import { trigger, state, transition, style, animate, keyframes, animation } from '@angular/animations'

export let fade = trigger('fade', [
    // state(),
    transition('* => void', [
      animate(200, style({opacity: 0}))
    ]),
    transition('void => *', [ 
      style({backgroundColor: 'black', opacity: 0}),
      animate(1000)
    ])

  ])

  export let slowSlide = trigger('slowSlide', [

    transition('void => *', [ 
      style({transform: 'translateX(50px)', opacity: 0}),
      animate(1000)
    ])

  ])

  export let slideAnimation = animation([
    style({transform: 'translateX(-1000px)', opacity: 0}),
    animate('{{ duration }} {{ delay }} cubic-bezier(.73,.2,0,1.67)')
    ], {
        params: {
            duration: '2s',
            delay: '.2s'
        }
    })

  export let fastSlide = trigger('fastSlide', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .2s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide2 = trigger('fastSlide2', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .4s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide3 = trigger('fastSlide3', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .6s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide4 = trigger('fastSlide4', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .8s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide5 = trigger('fastSlide5', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s 1s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let jackBox = trigger('jackBox', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('5s ease-out', keyframes([
        style({
            offset: 0,
            transform: 'scale(0.1); rotate(30deg)'
        }),
        style({
            offset: .5,
            transform: 'rotate(-10deg)'
        }),
        style({
            offset: .7,
            transform: 'rotate(3deg)'
        }),
        style({
            offset: 1,
            opacity: 1,
            transform: 'scale(1)'
        })
      ]))
    ])
  ])

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

    export let aboutSlide1 = trigger('aboutSlide1', [
      transition('void => *', [ 
        style({transform: 'translateX(-1000px)', opacity: 0}),
        animate('.5s .33s cubic-bezier(.73,.2,0,1.67)')
      ])
    ])

    export let aboutSlide2 = trigger('aboutSlide2', [
      transition('void => *', [ 
        style({transform: 'translateX(-1000px)', opacity: 0}),
        animate('.5s .66s cubic-bezier(.73,.2,0,1.67)')
      ])
    ])

    export let aboutSlide3 = trigger('aboutSlide3', [
      transition('void => *', [ 
        style({transform: 'translateX(-1000px)', opacity: 0}),
        animate('.5s .99s cubic-bezier(.73,.2,0,1.67)')
      ])
    ])

  export let fastSlide = trigger('fastSlide', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .25s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide2 = trigger('fastSlide2', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .5s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide3 = trigger('fastSlide3', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s .75s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide4 = trigger('fastSlide4', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s 1s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let fastSlide5 = trigger('fastSlide5', [
    transition('void => *', [ 
      style({transform: 'translateX(-1000px)', opacity: 0}),
      animate('.5s 1s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let upSlide1 = trigger('upSlide1', [
    transition('void => *', [ 
      style({transform: 'translateY(100px)', opacity: 0}),
      animate('.5s .33s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let upSlide2 = trigger('upSlide2', [
    transition('void => *', [ 
      style({transform: 'translateY(100px)', opacity: 0}),
      animate('.5s .66s cubic-bezier(.73,.2,0,1.67)')
    ])
  ])

  export let upSlide3 = trigger('upSlide3', [
    transition('void => *', [ 
      style({transform: 'translateY(100px)', opacity: 0}),
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

  export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('5s', style({ opacity: 1 }))
        ]),
    ]);

    export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);
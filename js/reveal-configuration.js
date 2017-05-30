// More info about config and dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({

  controls: false, // Display controls in the bottom right corner
  progress: false, // Display a presentation progress bar
  // defaultTiming: 120, // Set default timing of 2 minutes per slide
  // slideNumber: false, // Display the page number of the current slide
  // history: false, // Push each slide change to the browser history
  // keyboard: true, // Enable keyboard shortcuts for navigation
  // overview: true, // Enable the slide overview mode
  // center: true, // Vertical centering of slides
  // touch: true, // Enables touch navigation on devices with touch input
  // loop: false, // Loop the presentation
  // rtl: false, // Change the presentation direction to be RTL
  // shuffle: false, // Randomizes the order of slides each time the presentation loads
  // fragments: true, // Turns fragments on and off globally

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  // embedded: false,

  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  // help: true,

  // showNotes: false,// Flags if speaker notes should be visible to all viewers

  // Global override for autolaying embedded media (video/audio/iframe)
  // - null: Media will only autoplay if data-autoplay is present
  // - true: All media will autoplay, regardless of individual setting
  // - false: No media will autoplay, regardless of individual setting
  // autoPlayMedia: null,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  // autoSlide: 0,

  // autoSlideStoppable: true, // Stop auto-sliding after user input
  // autoSlideMethod: Reveal.navigateNext, // Use this method for navigation when auto-sliding
  mouseWheel: true, // Enable slide navigation via mouse wheel
  // hideAddressBar: true, // Hides the address bar on mobile devices
  // previewLinks: false, // Opens links in an iframe preview overlay

  // Transition style
  // transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Transition speed
  // transitionSpeed: 'default', // default/fast/slow

  // Transition style for full page slide backgrounds
  // backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // viewDistance: 3, // Number of slides away from the current that are visible

  // Parallax background image
  // parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  // Parallax background size
  // parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

  // Number of pixels to move the parallax background per slide
  // - Calculated automatically unless specified
  // - Set to 0 to disable movement along an axis
  // parallaxBackgroundHorizontal: null,
  // parallaxBackgroundVertical: null,

  // display: 'block' // The display mode that will be used to show slides

  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

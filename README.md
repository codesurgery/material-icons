# Material Design Icons v2 (2018)

Google released it's new sexy set of icons [here](https://material.io/tools/icons),
but they haven't updated their Github repo with them.

There are 5 styles, and this includes all of them:

- Baseline (Filled)
- Outline (Outlined)
- Round (Rounded)
- Two-Tone
- Sharp

All of the svgs have been properly compressed through [svgo](https://github.com/svg/svgo).

---

Things you can do with this:

1. Use it as a cdn: see below.
2. Download all of the Material Design icons and go to town with them
3. The svgs all have `fill="currentColor"` meaning that if you embed them
   into your HTML then it should match the containing element's text color,
   and can be overridden.

### Basic usage

```
<!-- Load stylesheet, which will use the relevant image assets -->
<link rel="stylesheet" href="./twotone/css/twotone.png.min.css">

<!-- Now you can go wild -->
<div class="material-home"></div> Home
```

> ![](./example.png);

> (Explanation)  
> Just add the class `material-X` to a div or span.  
> X can be any of the icon names found on [this page](https://material.io/tools/icons).
> 
> I'm not 100% sure that Google (or I) have made every icon for every style available 🤷‍♀️

### URLs

- ./baseline/css/baseline.png.min.css
- ./outline/css/outline.png.min.css
- ./round/css/round.png.min.css
- ./sharp/css/sharp.png.min.css
- ./twotone/css/twotone.png.min.css

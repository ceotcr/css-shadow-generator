# CSS SHADOW GENERATOR
CSS Shadow Generator, just tweak some properties, copy styles and you are good to go....

> Innovation is an outcome of Habit not a random act...

A project does not have to comprise billions of lines of code or a million features. A project is an opportunity to learn, a platform to discover and advance our knowledge along with testing our skills and capabilities.

This project gave me that opportunity.

It enhanced my HTML, CSS & JS skills.
I learned to manipulate DOM with more dynamic approach...

## Features

- [Box Shadow Generator](https://chetanraje.github.io/boxshadowgenerator)

![Box-Shadow-Generator](https://user-images.githubusercontent.com/68210482/183402561-230c34bb-63d6-45a1-9837-7d9f9ef2a927.png)

### #BoxShadows
- The box-shadow property enables you to cast a drop shadow from the frame of almost any element, it creates shadow effects around an element's frame. 
- A box shadow is described by X (Horizontal) and Y (Vertical) offsets relative to the element, blur and spread radius, and color.
- Multiple effects can be added, separated by commas.
- If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).

### #Docs
[Box Shadow Generator](https://chetanraje.github.io/boxshadowgenerator) is an interactive tool to create beautiful shadow effect by tweaking few properties using it's damn simple interface.

- Use Sliders to change following properties to create desired shadow effects.

##### @Tweaks

<img src='https://user-images.githubusercontent.com/68210482/183656484-5229c51b-f249-46b3-b30c-c27f15174a40.png'  style="width:512px; max-width:80vw;">

1. Horizontal Offset 
2. Vertical Offset 
3. Blur Radius
4. Spread Radius
5. Shadow Color
6. Opacity of Color
7. Inset


The changed value of the property can be seen on upper right corner of its slider.

<img src='https://user-images.githubusercontent.com/68210482/183659591-8b6e6a7f-9957-4127-bb3f-e55df55cc12a.png' style="width:512px; max-width:80vw;">


- CSS styles can be copied by clicking `COPY` button.

<img src='https://user-images.githubusercontent.com/68210482/183661758-681bcee3-8717-4102-9794-eeab92fb8f16.png'  style="width:512px; max-width:80vw;">

eg.
```CSS
box-shadow: 8px 8px 7px 0px rgba(42,48,81,0.9);
```


- Inset

Inset checkbox can be used to toggle the inset on or off. If it is off (Default) the shadow is assumed to be a drop shadow (as if the box were raised above the content). The presence of the inset keyword changes the shadow to one inside the frame (as if the content was debossed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.

<img src='https://user-images.githubusercontent.com/68210482/183665526-0f746200-7e37-41d0-9c46-6d23c34fc32e.png'  style="width:512px; max-width:80vw;">

- Multiple shadows can be created by separating with commas `,`

```css
box-shadow: 8px 8px 7px 0px rgba(42,48,81,0.9), inset 0px 0px 15px 5px rgba(42,48,81,0.9);
```

#### #FutureRoadmap

- Pre-Styled Box-Shadows
- Text Shadow Generator with set of Pre-Styled text shadows

## Author
[@CHETAN_SAPKAL](https://github.com/chetanraje)

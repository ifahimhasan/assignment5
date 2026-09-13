# Dev Stack

A simple React website where you can browse different web development technologies and build your own stack by adding the ones you like.

You can look through 15 technologies (React, Node.js, PostgreSQL, Docker and more), see the details of each one, and add them to a "Your Stack" panel on the side. If you change your mind you can remove one item or clear the whole stack.

## Live Site

https://relaxed-heliotrope-daef83.netlify.app/

## Technology I Used

- React.js
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- Vite

## Features

1. **Add and remove technologies from your stack.** Click "Add to Stack" on any card and it shows up in the Your Stack panel. The same technology cannot be added twice, and if you try, a warning toast appears. You can remove one item with the X button or clear everything with "Remove All".

2. **Data comes from a JSON file.** The technology list is not written inside the components. It is kept in a separate `technologies.json` file and loaded when the page opens, so adding a new technology only means editing the JSON.

3. **Fully responsive with one shared gradient theme.** The layout works on mobile, tablet and desktop. The orange to pink to violet gradient is defined once in the CSS, so changing that one line re-themes the logo, the hero heading and the buttons together.

## How to Run It

```bash
npm install
npm run dev
```

Then open the link that shows up in the terminal.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets me write HTML-looking code inside my JavaScript file. So instead of creating elements with a lot of JavaScript code, I can just write `<h1>Hello</h1>` directly. It is used because it makes the UI much easier to read and write. Behind the scenes React turns this JSX into normal JavaScript.

### 2. What is the difference between props and state?

Props are the data a component gets from its parent. The component cannot change its own props, it just uses them. State is data the component owns itself, and it can change it. When state changes, the component re-renders.

In my project, `selectedTechs` is state inside `App`, and when I pass it down to `YourStack`, it becomes a prop there.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` gives a component a piece of memory. It gives you the current value and a function to update it, and when you update it the screen re-renders with the new value.

I used it in three places:

- `App.tsx` for `technologies` (the list from the JSON), `loading` (whether the data is still coming), and `selectedTechs` (the technologies the user added)
- `Header.tsx` for `isMenuOpen` to know if the mobile menu is open or closed

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. It is used for things that are not part of drawing the UI, like fetching data.

I needed it because fetching the JSON takes time and I cannot do it directly in the component body. If I called fetch there, it would run on every single render and cause an endless loop. With `useEffect` and an empty dependency array `[]`, the fetch runs only once when the page first loads.

```jsx
useEffect(() => {
  fetch('/technologies.json')
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

### 5. Why does every item in a .map() list need a unique key prop?

The key helps React tell the items apart. When the list changes, React compares the old list with the new one, and the key is how it knows which item is which. Without it, React can update the wrong item or re-render things it did not need to.

In my project I used `key={tech.id}` since every technology has its own id.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things on screen depending on a condition.

I used it in `YourStack.tsx`. If nothing has been added yet, it shows an empty message. Otherwise it shows the list of selected technologies and the Remove All button.

```jsx
{selectedTechs.length === 0 ? (
  <p>No technologies selected yet</p>
) : (
  <div>{/* the list and Remove All button */}</div>
)}
```

I also used it for the loading spinner and for the "Add to Stack" button, which changes to "Added to Stack" once the technology is in the stack.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to child is easy, you just pass it as a prop:

```jsx
<TechnologyCard tech={tech} isAdded={isAdded} />
```

Child to parent works the other way around. The parent passes down a function, and the child calls that function when something happens. The data goes back up through that function call.

In my project `App` passes `handleAddTech` down to the card as `onAdd`. When the user clicks the button, the card calls `onAdd(tech)`, and `App` receives the technology and adds it to the state.



Fahim Hasan

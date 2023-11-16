# HORDOFEL-UI

## Description

This plugin is for the last project of OpenClassrooms "Front-End" formation .

## How to install ?

```cmd
npm i hordofel-ui
```

## How to use ?

1. Import the plugin in your project like this :

```javascript
import Modal from 'hordofel-ui';
```

2. The state :

```javascript
const [displayModal, setDisplayModal] = useState(false);
```

3. In the return :

```js
<Modal showModal={displayModal}>
  <p className="text-lg text-white">Employee Created !</p>
  <span
    className="absolute block text-xs text-white cursor-pointer right-3 top-3 icon"
    onClick={() => setDisplayModal(false)}
  >
    Close
  </span>
</Modal>
```

Modal is a react component that receives a child, so you can put whatever you want in it and customise it as you like. In our example, we put a paragraph and a span as children.

## Personalize

1. As the component is fully customisable, you can use css or tailwind css . We used Tailwind CSS in the previous example.

2. you can also move the modal where you want by using the class `modal`.

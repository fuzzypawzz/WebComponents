export default class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.onclick = () => {
      console.log('You clicked me!');
    };

    const buttonText = this.getAttribute('data-text');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          --color: #000;
          --background: #fff;
          --border: 1px solid #000;
        }
        button {
          display: block;
          padding: 0.5rem 1rem;
          border: var(--border);
          background: var(--background);
          color: var(--color);
          border-radius: 0.25rem;
          cursor: pointer;
        }
        button:hover {
          background: #eee;
        }
        p {
          color: red;
        }
      </style>
      <button>${buttonText}</button>
    `;
  }
}

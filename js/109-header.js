const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<style>
    .header{
        text-align: center;
    }
    h1{
        color: blue;
    }
</style>

<div>
    <div class="header">
        <h1> Header - My First Web Component </h1>
    </div>
</div>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);

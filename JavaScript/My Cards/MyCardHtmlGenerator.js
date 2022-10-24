let existingElements = 0;

class HtmlElement {
    constructor(
        elementName,
        attributes = [])
    {
        this.elementName = elementName;
        this.attributes = attributes;
        this.id = `${this.elementName}_${++existingElements}`;
        this.printed = false;
        this.innerText = "";    // Represents the inner text content.
        this.element = null;    // Represents the DOM element.
        this.insideElements = [];   // Contains all the HTML elements inside the inner data.
        this.eventHandlers = [];    // Contains all the events and their handlers for the current element.
    }

    getId() {
        return this.id; 
    }

    printElement(){
        if(!this.printed){
            document.write(this.getHtml());
            this.setAsPrinted();
        }
    }

    getHtml(){
        return  `<${this.elementName} ${this.attributes.join(" ")}
                    id="${this.id}">
                        ${this.insideElements.length ? this.getInsideElementsHtml() : this.innerText}
                    </${this.elementName}>`;
    }

    getInsideElementsHtml(){
        let innerHtml = "";
        for(let insideElement of this.insideElements){
            innerHtml += insideElement.getHtml();
        }
        return innerHtml;
    }

    setAsPrinted(){
        if(!this.printed){
            this.printed = true;
            this.element = this.getElement();
            for(let element of this.insideElements)
                element.setAsPrinted();
            this.executeAddingEventListeners();
        }
    }

    getElement(){
        if(this.printed)
            return document.getElementById(this.id);
    }

    insertElement(element){
        this.insideElements.push(element);
        if(this.printed){
            this.element.insertAdjacentHTML("beforeend", element.getHtml());
            element.setAsPrinted();
        }
    }

    insertText(text){
        if(this.printed){
            if(!this.insideElements.length)
                this.element.textContent = text;
        }
        else{
            this.innerText = text;
        }
    }

    addEventListener(eventType, eventHandler){
        if(this.printed){
            this.element.addEventListener(eventType, eventHandler);
        }
        else{
            this.eventHandlers.push({ eventType, eventHandler });
        }
    }

    executeAddingEventListeners(){
        for(let eventHandler of this.eventHandlers){
            this.element.addEventListener(eventHandler.eventType, eventHandler.eventHandler);
        }
        this.eventHandlers = [];
    }
}

export default HtmlElement 
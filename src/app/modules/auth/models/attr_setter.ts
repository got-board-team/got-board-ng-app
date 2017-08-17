export class AttrSetter {
    setAttributes(attributesNames:Array<string>, attributesInput:any) {
        attributesNames.forEach((attributeName) => {
            if (attributesInput[attributeName]) this[attributeName] = attributesInput[attributeName];
        });
    }
}
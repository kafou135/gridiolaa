
export const Email = (name: string,message1:string) => {
    const styledEmail = {
        body: {
            name: name,
            message1:message1,
        }
    };

    const plainText = `
    NAME: ${name} 
    ${message1}
    
    `
    return {styledEmail, plainText}
}


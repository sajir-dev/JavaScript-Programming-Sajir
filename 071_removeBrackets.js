removeBrackets = (expression) => {
    let newExpression = expression.split('');
    for (let i = 0; i <=newExpression.length; i++){
        if (newExpression[i]==='(' || newExpression[i]===')'){
            delete newExpression[i]
        }
    }
    return newExpression.join('')
}

console.log(removeBrackets('(a+c)(b-c)(d+c)+d%a)'))

//action Demo
var url="https://juliemr.github.io/protractor-demo/";
describe('ng repeater test', function(){
it('Open Poses website for action demo', function(){
browser.get(url);

browser.actions().mouseMove()(element(by.model(""))).sendKeys("India").perform();
})
})

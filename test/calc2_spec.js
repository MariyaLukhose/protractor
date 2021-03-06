describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
  
    function add(a, b) {
      firstNumber.sendKeys(a);
      secondNumber.sendKeys(b);
      goButton.click();
    }
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a history', function() {
      add(1, 2);
      add(3, 4);
  
      expect(history.count()).toEqual(2);
  
      add(5, 6);
  
      expect(history.count()).toEqual(0); // This is wrong!
    });
    it('should have a history', function() {
        add(1, 2);
        add(3, 4);
    
        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('foo'); // This is wrong!

    });
        // it('items list checking',function(){
        //     $$('.items li').then(function(items) {
        //         expect(items.length).toBe(3);
        //         expect(items[0].getText()).toBe('First');
        //       });
        // });
  });
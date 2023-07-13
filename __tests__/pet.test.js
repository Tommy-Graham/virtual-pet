const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });

    it('has an fitness age of 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);

    });
    
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('increments the fitness by -3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
    
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });    
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by 4 to a maximum of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    })

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });

    
});

describe('feed', () => {
    it('reduces hunger by 3 to a minimum of 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    })

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });  
}) 

describe('checkUp', () => {

    it('returns a string expressing if it is both hungry AND needs exercise', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.hunger = 7;
        
        const result = pet.checkUp();

        expect(result).toEqual(`I am hungry and I need a walk`);
    })

    it('returns a string to express if it is hungry', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.fitness = 6;

        const result = pet.checkUp();

        expect(result).toEqual(`I am hungry`);
    })
    
    it('returns a string to express if it needs exercise', () => {
        const pet = new Pet('Fido');

        pet.fitness = 3;
        pet.hunger = 3;

        const result = pet.checkUp();

        expect(result).toEqual(`I need a walk`);
    })

    it('returns "I feel great!" if it needs neither exercise nor food', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.hunger = 0;
        const result = pet.checkUp();

        expect(result).toEqual (`I feel great!`)
    })
})

describe('isAlive', () => {
    it('returns true if none of the criteria have been met', () => {
      const pet = new Pet('Fido');
  
      pet.age = 30;
      pet.fitness = 10;
      pet.hunger = 0;
  
      const answer = pet.isAlive; 
  
      expect(answer).toEqual(false); 
    });
  });
    
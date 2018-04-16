import { expect } from "chai";

import GameController from "../js/GameController";

let testgc: GameController;

before(function() {
    testgc = new GameController();
    testgc.initialize();
  });

describe("GameController", () => {
    it("After initialize, rolledNumber of GameState should be 0.", () => {       
         expect(testgc.gameState.rolledNumber).equals(0);
     })
 });

 describe("GameController", () => {
    it("When GC has been initialized, clickedPawnIndex should be 0", () => {
         expect(testgc.clickedPawnIndex).equals(0);
     })
 });

 describe("GameController", () => {
    it("When GC has been initialized and die has been rolled, die should not be 100", () => {
         const testgc : GameController = new GameController();
         testgc.initialize();
         testgc.rollDie();
         expect(testgc.clickedPawnIndex).equals(0);
     })
 });
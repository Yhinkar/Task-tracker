//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract taskTracker{
    //Create to-do
    //Check to-do status
    //Update to-do
    //delete to-do

    struct todo{
        bool status;
        string input;

    }
    todo[] public Todos;

    event TodoCompleted(uint _index, bool status);
    event TodoCreated( bool status, string input);
    event TodoDeleted(uint _index);


    function createTodo( bool _status,  string memory  _input) external{ //function that allow to create To-do..
        todo memory todos = todo({status:_status, input: _input});
        Todos.push(todos);
        emit TodoCreated(_status, _input);

    }

    function checkTodo(uint _index) external view returns (bool,string memory){
         todo memory to = Todos[_index];
         return (to.status, to.input);
    }

    function updateTodo(uint _index, string memory _input)  external{
         todo storage to = Todos[_index];
         to.input = _input;
    }

    function deleteTodo(uint _index) external {
        if (_index >= Todos.length) return revert("Todo's does not exist!");
        for(uint i = _index; i< Todos.length - 1; i++){
            Todos[_index] = Todos[_index -1]; 
        }
        Todos.pop(); 
        emit TodoDeleted(_index);
    }

    function completedTodo(uint _index) external {
        todo memory _todo = Todos[_index];
        _todo.status = !_todo.status;
        emit TodoCompleted(_index, _todo.status);
    }
}
class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new

    if (@todo.save)
      render json: @todo
    else
      render json: @todo
    end
  end

  def update
    @todo = Todo.find_by(id: params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo
    end
  end

  def destroy
    @todo = Todo.find_by(id: params[:id])
    @todo.delete

  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end

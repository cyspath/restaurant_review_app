class CommentsController < ApplicationController

  def index
    @comments = Comment.where(restaurant_id: params[:restaurant_id])
  end

  def create
    @comment = Comment.create(
      comment_params.merge(restaurant_id: params[:restaurant_id]).merge(rank: 0)
    )
  end

  def upvote
    Comment.upvote(params[:comment_id])
    @comment = Comment.find(params[:comment_id])
    # render same as #create method
    render :create
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :create
  end

  def comment_params
    params.required(:comment).permit(:body, :author, :parent_id)
  end

end

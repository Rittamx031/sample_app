class RelationshipsController < ApplicationController
  before_action :logged_in_user
  before_action :load_user, only: :create
  before_action :load_relationship, only: :destroy

  def create
    current_user.follow(@user)
    redirect_to @user, notice: t(".follow_success")
  end

  def destroy
    current_user.unfollow(@user)
    redirect_to @user, notice: t(".unfollow_success")
  end

  private

  def load_user
    @user = User.find_by id: params[:followed_id]
    # handle when user is nil
  end

  def load_relationship
    @relationship = Relationship.find_by id: params[:id]
    # handle when relationship is nil
  end
end

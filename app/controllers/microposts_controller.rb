class MicropostsController < ApplicationController
  before_action :logged_in_user, only: %i(create destroy)
  before_action :correct_user,   only: :destroy

  def create
    @micropost = current_user.microposts.build(micropost_params)
    @micropost.picture.attach params.dig(:micropost, :picture)
    if @micropost.save
      flash[:success] = t("micropost.created")
      redirect_to root_url
    else
      @feed_items = []
      render "static_pages/home"
    end
  end

  def destroy
    if @micropost.destroy
      flash[:success] = t("micropost.deleted")
    else
      flash[:danger] = t("micropost.deleted_fail")
    end
    redirect_to request.referer || root_url
  end

  private
  def correct_user
    @micropost = current_user.microposts.find_by(id: params[:id])
    redirect_to root_url unless @micropost
  end

  def micropost_params
    params.require(:micropost).permit(:content, :picture)
  end
end

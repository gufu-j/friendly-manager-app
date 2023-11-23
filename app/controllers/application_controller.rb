class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::MimeResponds  #<- had to added for action controller respond_to


  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
  end


end

module ApplicationHelper
  include Pagy::Frontend

  def full_title page_title = ""
    base_title = t("title.commontitle")
    page_title.empty? ? base_title : "#{page_title} | #{base_title}"
  end
end

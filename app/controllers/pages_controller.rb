class PagesController < ApplicationController
    skip_before_action :authenticate_user!, only: [:home, :delete_all_doses, :new_dose]
  def about
  end

  def contact
  end

  def home
    @ingredients = Ingredient.all
    @doses = Dose.all
  end

  def new_dose
    @dose = Dose.new(ingredient_id: params[:ingredient], amount: params[:amount], user_id: 1)
    @dose.save!
    redirect_to root_path
  end

  def delete_all_doses
    @doses = Dose.all
    @doses.destroy_all

    redirect_to root_path
  end
end

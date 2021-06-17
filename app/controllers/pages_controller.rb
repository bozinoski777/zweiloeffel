class PagesController < ApplicationController
    skip_before_action :authenticate_user!, only: [:home, :delete_all_doses, :new_dose]
  def about
  end

  def contact
  end

  def home
    @ingredients = Ingredient.all
    @doses = Dose.all
    summary
  end

  def new_dose
    @dose = Dose.new(ingredient_id: params[:ingredient], amount: params[:amount], user_id: 1)
    @dose.save!
    redirect_to root_path
  end

  def summary
    doses = Dose.all
    summary_price = 0
    summary_weight = 0
    summary_protein = 0
    doses.each do |dose|
      summary_price += dose.ingredient.price
      summary_weight += dose.ingredient.weight
      summary_protein += dose.ingredient.protein
    end
    @summary_price = summary_price
    @summary_weight = summary_weight
    @summary_protein = summary_protein
  end

  def delete_all_doses
    @doses = Dose.all
    @doses.destroy_all

    redirect_to root_path
  end
end

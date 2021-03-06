Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'
  post 'new_dose', to: 'pages#new_dose'
  delete 'delete_all_doses', to: 'pages#delete_all_doses'
end

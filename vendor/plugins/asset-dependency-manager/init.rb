# Include hook code here

require 'codeofficer/asset_manager/controller'
require 'codeofficer/asset_manager/helpers'
require 'codeofficer/asset_manager/view'

ActionController::Base.send :include, CodeOfficer::AssetManager::Controller
ActionController::Base.send :helper, CodeOfficer::AssetManager::Helpers
ActionView::Base.send :include, CodeOfficer::AssetManager::View


module CodeOfficer 
  module AssetManager
    
    module Helpers
      def defaults_for_jquery
        {
        :themeroller =>       [ 'jquery-ui-themeroller/jquery-ui-themeroller.css' ], 
        :jquery =>            [ 'jquery-1.2.6.js' ],
        :effects_all =>       [ :effects_core,
                                :effects_blind,
                                :effects_bounce,
                                :effects_clip,
                                :effects_drop,
                                :effects_explode,
                                :effects_fold,
                                :effects_highlight,
                                :effects_pulsate,
                                :effects_scale,
                                :effects_shake,
                                :effects_slide,
                                :effects_transfer ],
        :effects_core =>      [ :jquery, 'ui/effects.core.js' ], 
        :effects_blind =>     [ :effects_core, 'ui/effects.blind.js' ], 
        :effects_bounce =>    [ :effects_core, 'ui/effects.bounce.js' ], 
        :effects_clip =>      [ :effects_core, 'ui/effects.clip.js' ], 
        :effects_drop =>      [ :effects_core, 'ui/effects.drop.js' ], 
        :effects_explode =>   [ :effects_core, 'ui/effects.explode.js' ], 
        :effects_fold =>      [ :effects_core, 'ui/effects.fold.js' ], 
        :effects_highlight => [ :effects_core, 'ui/effects.highlight.js' ], 
        :effects_pulsate =>   [ :effects_core, 'ui/effects.pulsate.js' ], 
        :effects_scale =>     [ :effects_core, 'ui/effects.scale.js' ], 
        :effects_shake =>     [ :effects_core, 'ui/effects.shake.js' ], 
        :effects_slide =>     [ :effects_core, 'ui/effects.slide.js' ], 
        :effects_transfer =>  [ :effects_core, 'ui/effects.transfer.js' ], 
        :ui_all =>            [ :ui_core,
                                :ui_accordian,
                                :ui_autocomplete,
                                :ui_colorpicker,
                                :ui_datepicker,
                                :ui_resizable,
                                :ui_draggable,
                                :ui_dialog,
                                :ui_droppable,
                                :ui_magnifier,
                                :ui_progressbar,
                                :ui_selectable,
                                :ui_slider,
                                :ui_sortable,
                                :ui_spinner,
                                :ui_tabs ],
        :ui_core =>           [ :jquery, 'ui/ui.core.js' ], 
        :ui_accordian =>      [ :ui_core, 'ui/ui.accordian.js' ], 
        :ui_autocomplete =>   [ :ui_core, 'ui/ui.autocomplete.js' ], 
        :ui_colorpicker =>    [ :ui_core, 'ui/ui.colorpicker.js' ], 
        :ui_datepicker =>     [ :ui_core, 'ui/ui.datepicker.js' ], 
        :ui_resizable =>      [ :ui_core, 'ui/ui.resizable.js' ], 
        :ui_draggable =>      [ :ui_core, 'ui/ui.draggable.js' ], 
        :ui_dialog =>         [ :ui_core, :ui_draggable, :ui_resizable, 'ui/ui.dialog.js' ], 
        :ui_droppable =>      [ :ui_core, :ui_draggable, 'ui/ui.droppable.js' ], 
        :ui_magnifier =>      [ :ui_core, 'ui/ui.magnifier.js' ], 
        :ui_progressbar =>    [ :ui_core, 'ui/ui.progressbar.js' ], 
        :ui_selectable =>     [ :ui_core, 'ui/ui.selectable.js' ], 
        :ui_slider =>         [ :ui_core, 'ui/ui.slider.js' ], 
        :ui_sortable =>       [ :ui_core, 'ui/ui.sortable.js' ], 
        :ui_spinner =>        [ :ui_core, 'ui/ui.spinner.js' ], 
        :ui_tabs =>           [ :ui_core, 'ui/ui.tabs.js' ]
        }
      end
      
      def add_assets_for(*args)
        args.each do |arg|
          case arg
            when Symbol
              add_assets_for( required_assets[arg.to_sym] )
            when Array
              arg.each { |x| add_assets_for(x) unless x.blank? }
            when String
              add_asset_by_kind(arg)
          end
        end
      end
      alias_method :assets_for, :add_assets_for
      
      private
      
      def required_assets
        @required_assets ||= begin
          @required_assets = {}
          @required_assets.merge!(defaults_for_jquery)
          @required_assets.merge!(asset_dependencies) if respond_to?(:asset_dependencies)
        end
      end
      
      def add_asset_by_kind(asset)
        if asset =~ /js$/i then
           @required_javascripts << asset unless @required_javascripts.include?(asset)
        elsif asset =~ /css$/i then
           @required_stylesheets << asset unless @required_stylesheets.include?(asset)
         else
        end
      end
    end
    
  end 
end
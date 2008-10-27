
module CodeOfficer 
  module AssetManager
 
    module View
      def generate_tags_for_assets(*args)
        assets_for(*args) unless args.nil?
        # move application.css to the bottom
        @required_stylesheets.push(@required_stylesheets.delete('application.css')) if @required_stylesheets.include?('application.css')
        css_output = @required_stylesheets.collect { |css| stylesheet_link_tag("#{css}") }.join("\n")
        # move application.js to the bottom
        @required_javascripts.push(@required_javascripts.delete('application.js')) if @required_javascripts.include?('application.js')
        js_output = @required_javascripts.collect { |js| javascript_include_tag("#{js}") }.join("\n")
        css_output +"\n"+ js_output
      end
    end
    
  end 
end
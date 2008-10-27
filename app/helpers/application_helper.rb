module ApplicationHelper
  def asset_dependencies
    {
      :defaults =>          [ :styles, :themeroller, :jquery, :blackbird, 'application.js' ],
      :styles =>            [ 'application.css' ],
      :js_class =>          [ 'class.js' ],
      :js_command =>        [ :js_class, 'src/command.js' ],
      :js_comparable =>     [ :js_class, 'src/comparable.js' ],
      :js_decorator =>      [ :js_class, 'src/decorator.js' ],
      :js_enumerable =>     [ :js_class, 'src/enumerable.js' ],
      :js_forwardable =>    [ :js_class, 'src/forwardable.js' ],
      :js_linked_list =>    [ :js_class, 'src/linked_list.js' ],
      :js_method_chain =>   [ :js_class, 'src/method_chain.js' ],
      :js_observable =>     [ :js_class, 'src/observable.js' ],
      :js_package =>        [ :js_class, 'src/package.js' ],
      :js_proxy =>          [ :js_class, 'src/proxy.js' ],
      :js_ruby =>           [ :js_class, 'src/ruby.js' ],
      :js_set =>            [ :js_class, 'src/set.js' ],
      :js_stack_trace =>    [ :js_class, 'src/stack_trace.js' ],
      :js_state =>          [ :js_class, 'src/state.js' ],
      :blackbird =>         [ 'blackbirdjs/blackbird.js', 'blackbirdjs/blackbird.css' ]
    }
  end
end

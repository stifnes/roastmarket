export const requestURL = 'https://www.roastmarket.de/api/catalog/vue_storefront_catalog/product/_search?_source_exclude=attribute_set_id,configurable_options,description,sgn,*.sgn,msrp_display_a ctual_price_type,*.msrp_display_actual_price_type,required_options,media_gallery,stock.use _config_min_qty,stock.use_config_notify_stock_qty,stock.stock_id,stock.use_config_backord ers,stock.use_config_enable_qty_inc,stock.enable_qty_increments,stock.use_config_manage _stock,stock.use_config_min_sale_qty,stock.notify_stock_qty,stock.use_config_max_sale_qt y,stock.use_config_max_sale_qty,stock.qty_increments,stock.stock_status_changed_auto,stoc k.show_default_notification_message,stock.use_config_qty_increments,stock.is_decimal_div ided&_source_include=acidity,awards,activity,badge,bohnensorte,coffee_aroma_category,co nfigurable_children.attributes,configurable_children.id,configurable_children.final_price,con figurable_children.color,configurable_children.original_price,configurable_children.original_ price_incl_tax,configurable_children.price,configurable_children.price_incl_tax,configurable _children.size,configurable_children.sku,configurable_children.special_price,configurable_ch ildren.special_price_incl_tax,configurable_children.tier_prices,configurable_children.base_pr ice_amount,configurable_children.base_price_unit,configurable_children.base_price_base_un it,configurable_children.base_price_base_amount,final_price,final_price_incl_tax,id,intensity, image,name,new,mahlgrad,manufacturer,base_price_amount,base_price_unit,base_price_bas e_unit,base_price_base_amount,original_price_incl_tax,original_price,price,price_incl_tax,pr oduct_links,roestgrad,sale,seals,special_price,special_to_date,special_from_date,special_pric e_incl_tax,status,tax_class_id,tea_art,tea_blattgrad,tea_verpackungsart,tier_prices,type_id,url _path,url_key,*image,*sku,stock,bundle_options,type_id,*small_image,yotpo_rating,yotpo_r eview_count,small_thumbnail,subscription,zusammensetzung&from=0&size=48&sort=position_category_5:asc'

export const requestBody = {"query":{"bool":{"filter":{"bool":{"must":[{"terms": {"visibility":[2,3,4]}},{"terms":{"status":[0,1]}}, {"terms":{"category_ids": [5]}}]}}}}}
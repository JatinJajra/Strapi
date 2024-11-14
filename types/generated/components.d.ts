import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsTabs extends Struct.ComponentSchema {
  collectionName: 'components_components_tabs';
  info: {
    displayName: 'tabs';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ComponentsPlatform extends Struct.ComponentSchema {
  collectionName: 'components_components_platforms';
  info: {
    displayName: 'Platform';
    icon: 'brush';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    main_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sub_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    discretion: Schema.Attribute.Text & Schema.Attribute.Required;
    checkone: Schema.Attribute.String;
    checktwo: Schema.Attribute.String;
    checkthree: Schema.Attribute.String;
    checkfour: Schema.Attribute.String;
    checkfive: Schema.Attribute.String;
  };
}

export interface ComponentsPartners extends Struct.ComponentSchema {
  collectionName: 'components_components_partners';
  info: {
    displayName: 'Partners';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    partner_name: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsMonitoring extends Struct.ComponentSchema {
  collectionName: 'components_components_monitorings';
  info: {
    displayName: 'Monitoring';
    icon: 'command';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    discretion: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Features';
    icon: 'crop';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    discretion: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsDieselMenuTabs extends Struct.ComponentSchema {
  collectionName: 'components_components_diesel_menu_tabs';
  info: {
    displayName: 'Diesel Menu tabs';
    icon: 'connector';
  };
  attributes: {
    menu_lebal: Schema.Attribute.String;
    title: Schema.Attribute.String;
    discretion: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsDieselGasGeneratorsMenu
  extends Struct.ComponentSchema {
  collectionName: 'components_components_diesel_gas_generators_menus';
  info: {
    displayName: 'Diesel Gas Generators Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    discretion: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsDieselGasGeneratorsDesign
  extends Struct.ComponentSchema {
  collectionName: 'components_components_diesel_gas_generators_designs';
  info: {
    displayName: 'Diesel Gas Generators Design';
    icon: 'calendar';
  };
  attributes: {
    main_title: Schema.Attribute.String & Schema.Attribute.Required;
    discretion: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsDashboardBlog extends Struct.ComponentSchema {
  collectionName: 'components_components_dashboard_blogs';
  info: {
    displayName: 'dashboard_blog';
    icon: 'calendar';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsBlocks extends Struct.ComponentSchema {
  collectionName: 'components_components_blocks';
  info: {
    displayName: 'blocks';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_banners';
  info: {
    displayName: 'Banner';
    icon: 'crop';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    first_image: Schema.Attribute.Media<'images'>;
    second_image: Schema.Attribute.Media<'images'>;
    final_image: Schema.Attribute.Media<'images'>;
    light_text: Schema.Attribute.String;
    first_card_title: Schema.Attribute.String;
    second_card_title: Schema.Attribute.String;
    final_card_title: Schema.Attribute.String;
    first_card_subtitle: Schema.Attribute.String;
    second_card_subtitle: Schema.Attribute.String;
    final_card_subtitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'components.tabs': ComponentsTabs;
      'components.platform': ComponentsPlatform;
      'components.partners': ComponentsPartners;
      'components.monitoring': ComponentsMonitoring;
      'components.features': ComponentsFeatures;
      'components.diesel-menu-tabs': ComponentsDieselMenuTabs;
      'components.diesel-gas-generators-menu': ComponentsDieselGasGeneratorsMenu;
      'components.diesel-gas-generators-design': ComponentsDieselGasGeneratorsDesign;
      'components.dashboard-blog': ComponentsDashboardBlog;
      'components.blocks': ComponentsBlocks;
      'components.banner': ComponentsBanner;
    }
  }
}
